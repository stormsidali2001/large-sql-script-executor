import  mysql from "mysql2/promise"
import fs from 'fs/promises'
import lineByLine from 'n-readlines'

const connection = await mysql.createConnection({
    user:"root",
    password:"123456",
    database:"amnet_algeriemarches_new",
    host:"localhost",
})






// const liner = new lineByLine('./db/amnet_algeriemarches_new.sql');

// let line;
// let lineNumber = 0;
// let nb_query = 0;
// let tm_query = "";
// while (line = liner.next()) {
//     const lineString = line.toString('ascii')
//     if(new RegExp("^--").test(lineString)) continue;
  
//     tm_query+= lineString+"\n\r";
//     if(new RegExp(";$").test(lineString)) { 
//         nb_query++;
//         console.log(`\n\n\n\n\nnb_query: ${nb_query} ,line number: ${lineNumber} `)

//         try{
//             const [data] = await connection.query(tm_query)
//         }catch(err){
//             const status_str =await fs.readFile("status.json",{encoding:"utf8"})
//             if(status_str){
//                 const status = JSON.parse(status_str)
//                 await fs.writeFile("./status.json",JSON.stringify({
//                      errors:[...status.errors,{
//                         lineNumber,
//                         nb_query,
//                        err
//                      }],
                   
//                 }))

//             }
         
//         }
       
//         tm_query = "";
        
//     }
//     lineNumber++;

   
// }

// console.log('nb_query:',nb_query);
connection.end()

