function verificar () {
     var data = new Date()
     var ano = data.getFullYear()
     var fano = document.getElementById('txtano')
     var res = document.querySelector('div#res')
     if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert ('[ERRO] Verifique os Dados e Tente Novamente!')
     } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 3) {
                // Bebe
                img.setAttribute('src', 'bebemenino.jpg')
            }  else if (idade < 10)  {
                // Crianca
                img.setAttribute('src', 'criancamenino.jpg')
            
             }  else if (idade < 18) {
                // Adolecente
                img.setAttribute('src', 'adolescentem.jpg')
            } else if (idade < 36) {
                // Jovem
                img.setAttribute('src', 'jovemhomem.jpg')
            } else if ( idade < 53) {
                 // Adulto
                 img.setAttribute('src', 'homemadulto.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso.jpg')
            }
           
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 3) {
                // Bebe
                img.setAttribute('src', 'bebemenina.jpg')
            }  else if (idade < 10)  {
                // Crianca
                img.setAttribute('src', 'criancamenina.jpg')
            
             }  else if (idade < 18) {
                // Adolecente
                img.setAttribute('src', 'adolescentef.jpg')
            } else if (idade < 38) {
                // Jovem
                img.setAttribute('src', 'jovemmulher.jpg')
            } else if ( idade < 59) {
                 // Adulto
                 img.setAttribute('src', 'mulheradulta.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        //res.innerHTML = `Idade calculada: ${idade}` teste para ver se funciona//
       
     }
      

}