const express = require("express")
const axios = require("axios")

const router = express.Router()

const api_url = "http://colormind.io/api/"

function componentToHex(c) {
    var hex = c.toString(16)
    return hex.length == 1 ? "0" + hex : hex
}
  
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

function hexToRgb(hex) {
    var bigint = parseInt(hex, 16)
    var r = (bigint >> 16) & 255
    var g = (bigint >> 8) & 255
    var b = bigint & 255

    return [r,g,b]
}

const getPalette = () => {
    return new Promise(async resolve => {
        let response = await axios.post(api_url, JSON.stringify({model:"default"}))
        let res = []
        for(elem of response.data.result) {
            res.push(rgbToHex(elem[0],elem[1],elem[2]))
        }
        resolve(res)
    })
}

const getFromColor = (hex) => {
    return new Promise(async resolve => {
        let rgb = hexToRgb(hex)
        let response = await axios.post(api_url, JSON.stringify({model:"default",input:[rgb,"N","N","N","N"]}))

        let res = []
        for(elem of response.data.result) {
            res.push(rgbToHex(elem[0],elem[1],elem[2]))
        }
        resolve(res)
    })
}


router.get("/genPalette", async (req, res) => {
    let pal = await getPalette()
    res.json({status:true,data:pal})
})

router.get("/genFromColor/:color", async (req, res) => {
    let colorHex = req.params.color
    let palette = await getFromColor(colorHex)
    res.json({status:true,data:palette})
})

module.exports = router