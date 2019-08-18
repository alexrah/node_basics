import axios from "axios/index";
import cheerio from "cheerio";

exports.fetchWikiTitle = function(req, res){
    let myContent = [];
    let base_url = 'https://'+req.params.lang+'.wikipedia.org/wiki/';
    let query_url = req.params.query_url;
    let full_url = base_url+query_url;
    console.log(full_url);
    axios.get(full_url).then((res) => {
        let $ = cheerio.load(res.data);
        $('.mw-parser-output p').each((i, elm) => {
            // console.log($(elm).text());
            myContent.push($(elm).text());
        });

        return myContent;
    }).then((myContent) => {
        // res.writeHead(200, {'Content-Type': 'text/html'});
        // res.end(myContent.join());
        res.render('fetch/wiki',{ contents: myContent, title: "Fetch from Wikipedia"})
    }).catch((err) => {
        console.error(err);
    });
};

