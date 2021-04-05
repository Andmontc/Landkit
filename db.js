let faker = require('faker');
let generateData = () => {
    let data = []
    for (let id = 0; id < 50; id++) {
        data.push({
            "id": id,
            "author": faker.name.findName(),
            "avatar": faker.image.avatar(),
            "image": faker.image.image(),
            "price": faker.commerce.price(),
            "category": faker.name.jobType(),
            "date": faker.date.recent(),
            "body": faker.lorem.paragraphs(),
            "title": faker.lorem.sentence(),
            "subtitles": faker.lorem.sentences(),
        });
    }
    return { "data": data }
}
module.exports = generateData
