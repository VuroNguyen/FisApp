export async function addNewCourse(courseName, trainer, manager, date, time, building, room) {
    let data = {
        courseName : courseName,
        trainer : trainer,
        manager : manager,
        date : date,
        time : time,
        building : building,
        room : room
    }
    console.log('from add course api');
    const response = await fetch('http://localhost:5005/api/courses/add_course', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),

    }).then(response => response.json())
        .then(result => {
            console.log(result, 'hehe')
            return result
        }).catch((error) => {
            console.log(error);
        });
    console.log(response, 'day la response api cua add cours')
    return response
}