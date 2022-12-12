
import {PDS} from "@/store/modules/PDS";
//모듈 합치기
const files = require.context('.', false, /\.js$/)
const modules = {PDS}

files.keys().forEach((key) => {
    if (key === '.index.js') return
    modules[key.replace(/(\.\/|\.js)/g,'')] = files(key).default
})

export default modules