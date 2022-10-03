
document.querySelector('#submit').addEventListener('click', findMyZodiac)

function findMyZodiac(){
    const aries = document.querySelector('.aries')
    const taurus = document.querySelector('.taurus')
    const gemini = document.querySelector('.gemini')
    const cancer = document.querySelector('.cancer')
    const leo = document.querySelector('.leo')
    const virgo = document.querySelector('.virgo')
    const libra = document.querySelector('.libra')
    const scorpio = document.querySelector('.scorpio')
    const sag = document.querySelector('.sagittarius')
    const cap = document.querySelector('.capricorn')
    const aquarius = document.querySelector('.aquarius')
    const pisces = document.querySelector('.pisces')

    console.log (leo)
    let bdayMonth = document.querySelector('input#month').value
    bdayMonth = bdayMonth.toLowerCase()
    let bDay= document.querySelector('input#day').value

    if (bdayMonth === "january" && bDay <= 20 ) {
            document.querySelector('#placeTextHere').innerText = 'Capricorn!'
            aquarius.classList.add('hide')
            pisces.classList.add('hide')
            aries.classList.add('hide')
            taurus.classList.add('hide')
            gemini.classList.add('hide')
            cancer.classList.add('hide')
            leo.classList.add('hide')
            virgo.classList.add('hide')
            libra.classList.add('hide')
            scorpio.classList.add('hide')
            sag.classList.add('hide')
            cap.classList.toggle('hide')


        } else if (bdayMonth === "january" &&  bDay >= 21){
            document.querySelector('#placeTextHere').innerText = 'Aquarius!'
            cap.classList.add('hide')
            pisces.classList.add('hide')
            aries.classList.add('hide')
            taurus.classList.add('hide')
            gemini.classList.add('hide')
            cancer.classList.add('hide')
            leo.classList.add('hide')
            virgo.classList.add('hide')
            libra.classList.add('hide')
            scorpio.classList.add('hide')
            sag.classList.add('hide')
            aquarius.classList.toggle('hide')
        } else if (bdayMonth === "february" && bDay <= 18) {
            document.querySelector('#placeTextHere').innerText = 'Aquarius!'
            cap.classList.add('hide')
            pisces.classList.add('hide')
            aries.classList.add('hide')
            taurus.classList.add('hide')
            gemini.classList.add('hide')
            cancer.classList.add('hide')
            leo.classList.add('hide')
            virgo.classList.add('hide')
            libra.classList.add('hide')
            scorpio.classList.add('hide')
            sag.classList.add('hide')
            aquarius.classList.toggle('hide')
        } else if (bdayMonth === "february" && bDay >= 19){
            document.querySelector('#placeTextHere').innerText = 'Pisces!'
            cap.classList.add('hide')
            pisces.classList.toggle('hide')
            aries.classList.add('hide')
            taurus.classList.add('hide')
            gemini.classList.add('hide')
            cancer.classList.add('hide')
            leo.classList.add('hide')
            virgo.classList.add('hide')
            libra.classList.add('hide')
            scorpio.classList.add('hide')
            sag.classList.add('hide')
            aquarius.classList.add('hide')
        } else if (bdayMonth === "march" && bDay <= 20) {
            document.querySelector('#placeTextHere').innerText = 'Pisces!'
            cap.classList.add('hide')
            pisces.classList.toggle('hide')
            aries.classList.add('hide')
            taurus.classList.add('hide')
            gemini.classList.add('hide')
            cancer.classList.add('hide')
            leo.classList.add('hide')
            virgo.classList.add('hide')
            libra.classList.add('hide')
            scorpio.classList.add('hide')
            sag.classList.add('hide')
            aquarius.classList.add('hide')
        } else if (bdayMonth === "march"  &&  bDay >= 21){
            document.querySelector('#placeTextHere').innerText = 'Aries!'
            cap.classList.add('hide')
            pisces.classList.add('hide')
            aries.classList.toggle('hide')
            taurus.classList.add('hide')
            gemini.classList.add('hide')
            cancer.classList.add('hide')
            leo.classList.add('hide')
            virgo.classList.add('hide')
            libra.classList.add('hide')
            scorpio.classList.add('hide')
            sag.classList.add('hide')
            aquarius.classList.add('hide')
        } else if (bdayMonth === "april" && bDay <= 19) {
            document.querySelector('#placeTextHere').innerText = 'Aries!'
            cap.classList.add('hide')
            pisces.classList.add('hide')
            aries.classList.toggle('hide')
            taurus.classList.add('hide')
            gemini.classList.add('hide')
            cancer.classList.add('hide')
            leo.classList.add('hide')
            virgo.classList.add('hide')
            libra.classList.add('hide')
            scorpio.classList.add('hide')
            sag.classList.add('hide')
            aquarius.classList.add('hide')
        } else if (bdayMonth === "april" && bDay >= 20){
            document.querySelector('#placeTextHere').innerText = 'Taurus!'
            cap.classList.add('hide')
            pisces.classList.add('hide')
            aries.classList.add('hide')
            taurus.classList.toggle('hide')
            gemini.classList.add('hide')
            cancer.classList.add('hide')
            leo.classList.add('hide')
            virgo.classList.add('hide')
            libra.classList.add('hide')
            scorpio.classList.add('hide')
            sag.classList.add('hide')
            aquarius.classList.add('hide')
        } else if (bdayMonth === "may" && bDay <= 20 ) {
            document.querySelector('#placeTextHere').innerText = 'Taurus!'
            cap.classList.add('hide')
            pisces.classList.add('hide')
            aries.classList.add('hide')
            taurus.classList.toggle('hide')
            gemini.classList.add('hide')
            cancer.classList.add('hide')
            leo.classList.add('hide')
            virgo.classList.add('hide')
            libra.classList.add('hide')
            scorpio.classList.add('hide')
            sag.classList.add('hide')
            aquarius.classList.add('hide')
        } else if (bdayMonth === "may" && bDay >= 21){
            document.querySelector('#placeTextHere').innerText = 'Gemini!'
            cap.classList.add('hide')
            pisces.classList.add('hide')
            aries.classList.add('hide')
            taurus.classList.add('hide')
            gemini.classList.toggle('hide')
            cancer.classList.add('hide')
            leo.classList.add('hide')
            virgo.classList.add('hide')
            libra.classList.add('hide')
            scorpio.classList.add('hide')
            sag.classList.add('hide')
            aquarius.classList.add('hide')
        } else if (bdayMonth === "june" && bDay <= 20 ) {
            document.querySelector('#placeTextHere').innerText = 'Gemini!'
            cap.classList.add('hide')
            pisces.classList.add('hide')
            aries.classList.add('hide')
            taurus.classList.add('hide')
            gemini.classList.toggle('hide')
            cancer.classList.add('hide')
            leo.classList.add('hide')
            virgo.classList.add('hide')
            libra.classList.add('hide')
            scorpio.classList.add('hide')
            sag.classList.add('hide')
            aquarius.classList.add('hide')
        } else if (bdayMonth === "june" && bDay >= 21){
            document.querySelector('#placeTextHere').innerText = 'Cancer!'
            cap.classList.add('hide')
            pisces.classList.add('hide')
            aries.classList.add('hide')
            taurus.classList.add('hide')
            gemini.classList.add('hide')
            cancer.classList.toggle('hide')
            leo.classList.add('hide')
            virgo.classList.add('hide')
            libra.classList.add('hide')
            scorpio.classList.add('hide')
            sag.classList.add('hide')
            aquarius.classList.add('hide')
        } else if (bdayMonth === "july" && bDay <= 22 ) {
            document.querySelector('#placeTextHere').innerText = 'Cancer!'
            cap.classList.add('hide')
            pisces.classList.add('hide')
            aries.classList.add('hide')
            taurus.classList.add('hide')
            gemini.classList.add('hide')
            cancer.classList.toggle('hide')
            leo.classList.add('hide')
            virgo.classList.add('hide')
            libra.classList.add('hide')
            scorpio.classList.add('hide')
            sag.classList.add('hide')
            aquarius.classList.add('hide')
        } else if (bdayMonth === "july" && bDay >= 23){
            document.querySelector('#placeTextHere').innerText = 'Leo!'
            virgo.classList.add('hide')
            libra.classList.add('hide')
            scorpio.classList.add('hide')
            sag.classList.add('hide')
            aquarius.classList.add('hide')
            cap.classList.add('hide')
            pisces.classList.add('hide')
            aries.classList.add('hide')
            taurus.classList.add('hide')
            gemini.classList.add('hide')
            cancer.classList.add('hide')
            leo.classList.toggle('hide')
            
        } else if (bdayMonth === "august" && bDay <= 22 ) {
            document.querySelector('#placeTextHere').innerText = 'Leo!'
            
            virgo.classList.add('hide')
            libra.classList.add('hide')
            scorpio.classList.add('hide')
            sag.classList.add('hide')
            aquarius.classList.add('hide')
            cap.classList.add('hide')
            pisces.classList.add('hide')
            aries.classList.add('hide')
            taurus.classList.add('hide')
            gemini.classList.add('hide')
            cancer.classList.add('hide')
            leo.classList.toggle('hide')
            
        } else if (bdayMonth === "august" && bDay >= 23){
            document.querySelector('#placeTextHere').innerText = 'Virgo!'
            
            libra.classList.add('hide')
            scorpio.classList.add('hide')
            sag.classList.add('hide')
            aquarius.classList.add('hide')
            cap.classList.add('hide')
            pisces.classList.add('hide')
            aries.classList.add('hide')
            taurus.classList.add('hide')
            gemini.classList.add('hide')
            cancer.classList.add('hide')
            leo.classList.add('hide')
            virgo.classList.toggle('hide')
            
        } else if (bdayMonth === "september" && bDay <= 22 ) {
            document.querySelector('#placeTextHere').innerText = 'Virgo!'
            
            libra.classList.add('hide')
            scorpio.classList.add('hide')
            sag.classList.add('hide')
            aquarius.classList.add('hide')
            cap.classList.add('hide')
            pisces.classList.add('hide')
            aries.classList.add('hide')
            taurus.classList.add('hide')
            gemini.classList.add('hide')
            cancer.classList.add('hide')
            leo.classList.add('hide')
            virgo.classList.toggle('hide')
            
        } else if (bdayMonth === "september" && bDay >= 23){

            document.querySelector('#placeTextHere').innerText = 'Libra!'
           
            scorpio.classList.add('hide')
            sag.classList.add('hide')
            aquarius.classList.add('hide')
            cap.classList.add('hide')
            pisces.classList.add('hide')
            aries.classList.add('hide')
            taurus.classList.add('hide')
            gemini.classList.add('hide')
            cancer.classList.add('hide')
            leo.classList.add('hide')
            virgo.classList.add('hide')
            libra.classList.toggle('hide')
           
        } else if (bdayMonth === "october" && bDay <= 22 ) {

            document.querySelector('#placeTextHere').innerText = 'Libra!'
          
            scorpio.classList.add('hide')
            sag.classList.add('hide')
            aquarius.classList.add('hide')
            cap.classList.add('hide')
            pisces.classList.add('hide')
            aries.classList.add('hide')
            taurus.classList.add('hide')
            gemini.classList.add('hide')
            cancer.classList.add('hide')
            leo.classList.add('hide')
            virgo.classList.add('hide')
            libra.classList.toggle('hide')
            

        } else if (bdayMonth === "october" && bDay >= 23){

            
            document.querySelector('#placeTextHere').innerText = 'Scorpio!'
            
            sag.classList.add('hide')
            aquarius.classList.add('hide')
            cap.classList.add('hide')
            pisces.classList.add('hide')
            aries.classList.add('hide')
            taurus.classList.add('hide')
            gemini.classList.add('hide')
            cancer.classList.add('hide')
            leo.classList.add('hide')
            virgo.classList.add('hide')
            libra.classList.add('hide')
            scorpio.classList.toggle('hide')
            
        } else if (bdayMonth === "november" && bDay <= 21) {
            
            document.querySelector('#placeTextHere').innerText = 'Scorpio!'
           
            sag.classList.add('hide')
            aquarius.classList.add('hide')
            cap.classList.add('hide')
            pisces.classList.add('hide')
            aries.classList.add('hide')
            taurus.classList.add('hide')
            gemini.classList.add('hide')
            cancer.classList.add('hide')
            leo.classList.add('hide')
            virgo.classList.add('hide')
            libra.classList.add('hide')
            scorpio.classList.toggle('hide')
            
        } else if (bdayMonth === "november" && bDay >= 22){

            document.querySelector('#placeTextHere').innerText = 'Sagittarius!'
            
            aquarius.classList.add('hide')
            cap.classList.add('hide')
            pisces.classList.add('hide')
            aries.classList.add('hide')
            taurus.classList.add('hide')
            gemini.classList.add('hide')
            cancer.classList.add('hide')
            leo.classList.add('hide')
            virgo.classList.add('hide')
            libra.classList.add('hide')
            scorpio.classList.add('hide')
            sag.classList.toggle('hide')
            
        } else if (bdayMonth === "december" && bDay <= 21) {

            document.querySelector('#placeTextHere').innerText = 'Sagittarius!'
            
            aquarius.classList.add('hide')
            cap.classList.add('hide')
            pisces.classList.add('hide')
            aries.classList.add('hide')
            taurus.classList.add('hide')
            gemini.classList.add('hide')
            cancer.classList.add('hide')
            leo.classList.add('hide')
            virgo.classList.add('hide')
            libra.classList.add('hide')
            scorpio.classList.add('hide')
            sag.classList.toggle('hide')
            
        } else if (bdayMonth === "december" && bDay >= 22){
            document.querySelector('#placeTextHere').innerText = 'Capricorn!'
            
            pisces.classList.add('hide')
            aries.classList.add('hide')
            taurus.classList.add('hide')
            gemini.classList.add('hide')
            cancer.classList.add('hide')
            leo.classList.add('hide')
            virgo.classList.add('hide')
            libra.classList.add('hide')
            scorpio.classList.add('hide')
            sag.classList.add('hide')
            aquarius.classList.add('hide')
            cap.classList.toggle('hide')
        } else {
        document.querySelector('#placeTextHere').innerText = "Person That's Not Entering a Valid Date!"

    }
}