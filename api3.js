
fetch('https://fakestoreapi.com/products').then((data) =>{
    // console.log(data);
    return data.json();
}).then((finaldata) => {
    // console.log(finaldata[2].id);
    // console.log(finaldata[2].title);
    // console.log(finaldata[2].price);
    // console.log(finaldata);
    let data1 ="";
    finaldata.map((value) => {
        data1= data1 +` <div class=" m-3 card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${value.image}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${value.title}</h5>
              <p class="card-text">${value.description}</p>
              <h5 class="card-title">price: ${value.price}</h5>
              <a href="#" class="btn btn-primary">Buy Now</a>
            </div>
          </div>
        </div>
      </div>`

    //      `<div  class="col-3 m-4"> <div class="card  " style="width: 18rem; ">
    //     <img src="${value.image}" class="card-img-top" alt="...">
    //     <div class="card-body">
    //       <h5 class="card-title">${value.title}</h5>
    //       <p class="card-text">${value.description}</p>
    //       <h5 class="card-title">price: ${value.price}</h5>
    //       <a href="#" class="btn btn-primary">Buy Now</a>
    //     </div>
    //   </div>
    //   </div>`

    //      ` <div class="card">
    //     <h1 class="title">${value.title}</h1>
    //     <img src="${value.image}" alt="img" class="images">
    //     <p class="description">${value.description}</p>
    //     <div class="category">Category: ${value.category}</div>
    //     <div class="price"> Price:${value.price}</div>
    // </div>`;
    });

    document.getElementById("cards").innerHTML= data1;
   
}).catch((err) =>{
    console.log(err);
})