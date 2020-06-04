let counter = 5
hamTang = () => {
    return counter--
}
let asyncSetInter = (elem_id) => {
    document.getElementById('imgDIV').innerHTML = ''
    return new Promise((res, rej) => {
        let setInter = setInterval(() => {
            if (counter === 0) {
                clearInterval(setInter)
                res('asyncSetInter OK!')
            }
            document.getElementById(elem_id).innerHTML = hamTang()
        }, 1000)
    })
}
let showHinh = (elem_id, img_src) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            document.getElementById(elem_id).innerHTML = "<img src=" + img_src + " width=860 height=553>"
            res('showHinh OK!')
        }, 1)
    })
}
let lonHinh = (elem_id) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            document.getElementById('counterH1').innerHTML = ''
            document.getElementById(elem_id).innerHTML = "<h1>CHẾT MEN LỘN HÌNH!!! Sorry đếm lại nha^^</h1>"
            res('lonHinh OK!')
        }, 1)
    })
}
let setTOFunc = (interval_arg) => {
    return new Promise((res, rej) => {
        setTimeout(() => res('setTOFunc OK!'), interval_arg)
    })
}
asyncFunc = async () => {
    await asyncSetInter('counterH1').then(
        (data) => console.log(data)
    )
    await showHinh('imgDIV', 'https://www.pngitem.com/pimgs/m/2-23958_angry-birds-png-transparent-background-angry-birds-png.png').then(
        (data) => console.log(data)
    )
    await setTOFunc(3000).then(
        (data) => console.log(data)
    )
    await lonHinh('imgDIV').then(
        (data) => console.log(data)
    )
    await setTOFunc(3000).then(
        (data) => console.log(data)
    )
    counter = 3
    await asyncSetInter('counterH1').then(
        (data) => console.log(data)
    )
    await showHinh('imgDIV', 'https://i.ya-webdesign.com/images/angry-bird-png-7.png').then(
        (data) => console.log(data)
    )
}
asyncFunc()
