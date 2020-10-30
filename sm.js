function selectTd(e) {
    e.preventDefault()
    let l = e.target.classList
    if (l.contains('selected')) {
        l.remove('selected')
        return
    }
    l.add('selected')
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

    for (let i = 1; i <= n; ++i) {
        let [t, v] = lines[i].split(' ')
        td = document.createElement('td')
        td.addEventListener('contextmenu', selectTd)
        td.textContent = t
        trt.append(td)

        td = document.createElement('td')
        td.addEventListener('contextmenu', selectTd)
        td.textContent = v
        trv.append(td)
    }

    let t = document.querySelector('table')
    t.append(trt)
    t.append(trv)
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