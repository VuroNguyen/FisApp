import React from "react";

export async function getAllCourse(token) {
    console.log('from course api');
    console.log(token, "token from course api")
    const response = await fetch('http://118.69.123.51:5000/fis/api/edu/get_all_course', {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + token
        },
    }).then(response => response.json())
        .then(result => {
            
            return result
        }).catch((error) => {
            console.log(error);
        });
        
    return response
}