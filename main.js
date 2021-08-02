const axios = require('axios');

const step1 = async () => {
    const res = await axios.get('http://google.com')
    console.log('step 1')
}
const step2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('step 2')
            resolve()
        }, 200)
    })
}

const step3 = async () => {
    console.log('step 3').then(()=>{
        step4()
    })
}

const step4 = async () => {
    console.log('step 4').then(() => {
        step5()
    })
}


const main = async () => {
    console.log('main')

    //step1()
    //step2()
    //step3()

    if (test) {
        dfgdafgtdfg
        return false
    }


    if (test) {
        dazfgzfgdfg
    } else {
        dfgdfgadfg
        if (xdfgdfg) {
            zdfgdzgf
            if (dzfgdfzg) {
                zdfgdfzg
            }
        }
    }


    step1().then(async () => {
        step2().then(() =>{
            step3().then(() =>{

                чаепсп
                э

                step4().then(() =>{

                    Zваяваяв
                })
            })
        })
    })

}

main()
