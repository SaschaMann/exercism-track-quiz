function shuffle(a) {
    return a.sort(() => Math.random() - 0.5)
}

let tracks = shuffle(["ballerina", "bash", "c", "ceylon", "cfml", "clojure", "clojurescript", "coffeescript", "coldfusion", "common-lisp", "cpp", "crystal", "csharp", "d", "dart", "delphi", "ecmascript", "elixir", "elm", "emacs-lisp", "erlang", "fortran", "fsharp", "gnu-apl", "go", "groovy", "haskell", "haxe", "idris", "java", "javascript", "julia", "kotlin", "lfe", "lua", "mips", "nim", "objective-c", "ocaml", "perl5", "pharo-smalltalk", "php", "plsql", "powershell", "prolog", "purescript", "python", "r", "racket", "raku", "reasonml", "ruby", "rust", "scala", "scheme", "sml", "swift", "tcl", "typescript", "vb-net", "vimscript", "wren", "x86-64-assembly", "z3"])

function makeColourful(id) {
    const img = document.getElementById(id)
    img.setAttribute("class", "non-greyed-out")
}

function fillGrid() {
    let grid = document.getElementById("track-grid")
    for (let track of tracks) {
        let img = document.createElement("img")
        img.src = `https://raw.githubusercontent.com/exercism/website-icons/main/tracks/${track}.svg`
        img.id = track
        grid.appendChild(img)
    }
}

function updateValue(e) {
    const guess = e.target.value.toLowerCase()
    if (tracks.includes(guess)) {
        makeColourful(guess)
        e.target.value = ""
        tracks = tracks.filter(x => x !== guess)
    }
}

function main() {
    const guess = document.querySelector('input')
    guess.addEventListener('input', updateValue)
}

fillGrid()
main()
