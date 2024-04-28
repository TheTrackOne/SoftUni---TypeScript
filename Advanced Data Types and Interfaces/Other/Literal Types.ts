//Number literal type 
function error<T>(input :T) {
    let errorCode = 300 | 400 | 404 | 600;

    if (typeof input === null) {
        errorCode = 200;
        return errorCode;
    }
}

//String literal type
let statusN: "succsess" | "error";
statusN = "succsess";