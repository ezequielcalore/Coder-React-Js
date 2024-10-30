const base_de_datos = [
    {
        autor: "Charly García",
        titulo: "Clics Modernos",
        ano: 1983,
        precio: 30000,
        tapa: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/08/20/1e/08201e46-ec97-0f6a-1682-11d71a87bfab/00602498002155.rgb.jpg/1200x1200bb.jpg"
    },
    {
        autor: "Fito Paez",
        titulo: "Abre",
        ano: 1999,
        precio: 30000,
        tapa: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/86/e7/f1/86e7f127-30d0-57c9-1258-5d1e8f5d0d34/mzi.cgnxrbrd.jpg/1200x1200bb.jpg"
    },
    {
        autor: "Gustavo Cerati",
        titulo: "Fuerza Natural",
        ano: 2009,
        precio: 30000,
        tapa: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/62/31/0a/62310a20-6650-23d2-bd22-13e23a413335/886447012215.jpg/1200x1200bb.jpg"
    },
    {
        autor: "Luis Alberto Spinetta",
        titulo: "Kamikaze",
        ano: 1982,
        precio: 30000,
        tapa: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/56/9b/11/569b1131-ad78-897a-fad3-eeefb8351829/886445731668.jpg/1200x1200bb.jpg"
    }
]


export const getProducts = () => {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res(base_de_datos)
            rej("error")
        }, 3000)
        })
    }

export const getProductsByDecada = (decada) => {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res(base_de_datos.filter(e => e.ano >= decada && e.ano <= decada + 10))
            rej("error")
        }, 1500)
        })
    }
