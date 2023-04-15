serverFunction = 'http:/plaster.json';

var fetchData = fetch(serverFunction, { method: 'GET' });

fetchData.then(res => res.json())
    .then(obj => {
        console.log(obj);

        var outerCon = document.getElementById('outerContent');
        document.body.appendChild(outerCon)
        outerCon.style.cssText = 'width:95%;margin:30px auto;height:fit-content;display:flex; flex-wrap:wrap'

        obj.map(i => {

            var innerCon = document.createElement('div');
            innerCon.id = 'innerContent';
            outerCon.appendChild(innerCon);
            innerCon.style.cssText = 'box-shadow:2px 2px 5px 5px grey;border-radius:20px; margin:10px auto ;height:200px; width:300px;  padding:4px';

            var left = document.createElement('div');
            innerCon.appendChild(left);
            left.style.cssText = 'margin:auto';

            var img = document.createElement('img');
            left.appendChild(img);
            img.style.cssText = 'border-radius:20px;height:190px;width:130px'
            img.src = i.image;
            

            var right = document.createElement('div')
            innerCon.appendChild(right);
            right.style.cssText = 'width:200px;padding-left:5px'

            var title = document.createElement('div')
            right.appendChild(title);
            title.style.cssText = 'font-size:22px;line-height:30px;font-weight:bold;width:170px'
            title.innerHTML = i.Title;


            var price = document.createElement('div');
            right.appendChild(price);
            price.style.cssText = 'font-size:18px;margin-left:30px; margin-top:3%;font-weight:bolder;box-shadow:1px 1px 2px 1px grey; width:fit-content;border-radius:10px'
            price.innerHTML = i.Price;

            // var quo = document.createElement('div');
            // right.appendChild(quo);
            // quo.style.cssText = 'width:150px;font-size:15px'
            // quo.innerHTML = i.quotes;

            var delivary = document.createElement('div');
            right.appendChild(delivary);
            delivary.style.cssText = "font-weight:500;bottom:-5px;position:relative"
            delivary.innerHTML = i.Delivary;

            var rating = document.createElement('div');
            right.appendChild(rating);
            rating.style.cssText='bottom:-5px;position:relative'
            rating.innerHTML = `${i.Ratings}  &#x2605`;

            var buy = document.createElement('button')
            var text = document.createTextNode("Buy Now");
            buy.appendChild(text)
            right.appendChild(buy);
            buy.style.cssText="border:none; bottom:-15px;position:relative;background:transparent;box-shadow:1px 1px 2px 2px grey;border-radius:10px;font-size:15px"
          
            var cart = document.createElement('button');
            right.appendChild(cart);
            var text1 = document.createTextNode('Add Cart');
            cart.appendChild(text1);
            cart.style.cssText="border:none; bottom:-15px;position:relative;background:transparent;box-shadow:1px 1px 2px 2px grey;border-radius:10px;font-size:15px;left:10px"



        })

    })