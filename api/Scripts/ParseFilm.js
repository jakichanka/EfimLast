const osmosis = require('osmosis')
const fs = require('fs')

const savedData = []

osmosis
    .get('https://www.film.ru/online')
    .find('#movies_list > .posters:first-child')
    .set({
        'filmName' : 'a > strong'
    })
    // .follow('.anime-column-info > a[href]')
    // .find('.content-main-info > li:nth-child(11)')
    // .set ('episodes')
    .data((data) => {
        savedData.push(data)
    })
    .then(() => {console.log(savedData)});
    // .done(function() {
    //     fs.writeFile('films.json', JSON.stringify(savedData, null, ' '), function(err) {
    //       if(err) console.error(err);
    //       else console.log('Data Saved to films.json file');
    //     })
    //  });
