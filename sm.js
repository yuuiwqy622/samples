function addCssClass(e, css) {
    e.preventDefault()
    let l = e.target.classList
    if (l.contains(css)) {
        l.remove(css)
        return
    }
    l.add(css)
}


function createTable(lines) {
    let n = parseInt(lines[0])
    let trt = document.createElement('tr')
    let td = document.createElement('td')
    td.textContent = 't'
    trt.append(td)
    let trv = document.createElement('tr')
    td = document.createElement('td')
    td.textContent = 'v'
    trv.append(td)
    let trs = document.createElement('tr')
    td = document.createElement('td')
    td.textContent = 's'
    trs.append(td)

    for (let i = 1; i <= n; ++i) {
        let [t, v] = lines[i].split(' ')
        td = document.createElement('td')
        td.addEventListener('contextmenu', (e) => addCssClass(e, 'selected'))
        td.addEventListener('wheel', (e) => addCssClass(e, 'interval'))
        td.textContent = t
        trt.append(td)

        td = document.createElement('td')
        td.addEventListener('contextmenu', (e) => addCssClass(e, 'selected'))
        td.addEventListener('wheel', (e) => addCssClass(e, 'interval'))
        td.textContent = v
        trv.append(td)

        td = document.createElement('td')
        td.addEventListener('contextmenu', (e) => addCssClass(e, 'selected'))
        td.addEventListener('wheel', (e) => addCssClass(e, 'interval'))
        td.textContent = i < 2 ? v : parseInt(v) + parseInt(trs.lastChild.textContent)
        trs.append(td)
    }

    let t = document.querySelector('table')
    t.append(trt)
    t.append(trv)
    t.append(trs)
}

function readFile(e) {
    let f = e.target.files[0]
    if (!f) return

    let rd = new FileReader()
    rd.onload = (e) => {
        let lines = e.target.result.split(/[\r\n]+/g)
        createTable(lines)
    }
    rd.readAsText(f)
}

document.addEventListener('DOMContentLoaded', (e) => {
    document.getElementById('file-input').addEventListener('change', readFile)
})