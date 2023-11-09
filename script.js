$(document).ready(function(){
    $.getJSON('data.json', function(datas){
        datas.forEach(data => {
            $('.bars-container').append(
                `<div class="bar-cont ${data.day}">
                <div class="amount d-none">$${data.amount}</div>
                <div class="bar"></div>
                <p>
                  ${data.day}
                </p>
              </div>`
            )
            $(`.${data.day} .bar`).height(data.amount * 2)
            $(`.${data.day} .bar`).click(function(){
                $(`.${data.day} .amount`).toggleClass('d-none')
            })
        });

        const amount = datas.map(data => {
            return data.amount
        })

        const obj = datas.find(data => data.amount == Math.max(...amount))
        
        $(`.${obj.day} .bar`).css('backgroundColor', 'hsl(186, 34%, 60%)')
    })
    
  })