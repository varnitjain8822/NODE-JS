const sumrequesthandler = (req, res) => {
    console.log(req.url, req.method);
    const body = [];

    req.on('data', (chunk) => {   
        body.push(chunk);           
    });

    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const params = new URLSearchParams(parsedBody);
        const jsonobject = Object.fromEntries(params);
        console.log(jsonobject);
        res.write('<h1>Result</h1>');
        res.write(`<p>Sum = ${Number(jsonobject.num1) + Number(jsonobject.num2)}</p>`);
        return res.end();
    });
};

module.exports = { sumrequesthandler };
