import * as fs from 'fs'

export default async function handle_data(req, res){
  let data = await fs.promises.readdir("./JSON")
    let myfile;
    let allBlogs = [];
    for (let index = 0; index < data.length; index++) {
        const items = data[index];
        console.log(items);
        myfile = await fs.promises.readFile(("./JSON/" + items),'utf-8')
        allBlogs.push(JSON.parse(myfile))
    }
    res.status(200).json(allBlogs)
}