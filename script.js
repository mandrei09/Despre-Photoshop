let currentphotoID;

function fetchphotos() {
    let body = document.getElementsByTagName("body")[0];
    let p = document.createElement('p');
    p.innerText = 'loading...';
    p.setAttribute('id', 'loading');
    body.appendChild(p);

    fetch('http://localhost:3000/photos',
        {
            method:'get'
        }   
    ).then(function(response){
        response.json().then((data)=>{
            if(data.length) {
                console.log(data);
                body.removeChild(p);
            }
            const div=document.querySelector(".imagini");
            for(let i=0; i<data.length; i++) {
                let image = document.createElement('img');
                image.setAttribute('src', data[i].img);
                image.width=395;
                div.appendChild(image);

                let h2 = document.createElement('h2');
                h2.innerText=data[i].name;
                div.appendChild(h2);

                let edit = document.createElement('button');
                edit.innerText = 'Edit';
                edit.onclick = function() {
                    document.getElementById('name').value = data[i].name;
                    document.getElementById('url').value = data[i].img;
                    currentphotoID = data[i].id;
                }
                div.appendChild(edit);

                let Delete = document.createElement('button');
                Delete.innerText = 'Delete';
                Delete.onclick = function() {
                    deletephoto(data[i].id);
                }
                div.appendChild(Delete);

                let hr = document.createElement('hr');
                div.appendChild(hr);
            }
        })
    })
}

function addphoto() {
    let body = document.getElementsByTagName('body')[0];
    let name = document.getElementById('name').value;
    let image = document.getElementById('url').value;

    let newphoto = {
        name: name,
        img: image
    }

    fetch('http://localhost:3000/photos', 
        {
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newphoto)
        }).then(function(response) {
            window.location.reload();
        })
}

function updatephoto() {
    let name = document.getElementById('name').value;
    let image = document.getElementById('url').value;
    let newphoto = {
        name: name,
        img: image
    }

    fetch('http://localhost:3000/photos/' + currentphotoID, 
    {
        method: 'put',
        headers:  {'Content-Type': 'application/json'},
        body: JSON.stringify(newphoto)
    }).then(function(response) {
        window.location.reload();
    })
}

function deletephoto(id) {
    let name = document.getElementById('name').value;
    let image = document.getElementById('url').value;

    fetch('http://localhost:3000/photos/' + id, 
    {
        method: 'delete'
    }).then(function(response) {
        window.location.reload();
    })
}

fetchphotos();