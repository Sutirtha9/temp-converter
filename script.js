

document.querySelector('select').onclick=function()
        {
            document.querySelector('#outputbox1').value ="";
            document.querySelector('#outputbox2').value ="";

            var val=document.querySelector('#menu').value;

            switch(val)
            {

                case "cel":

                    document.querySelector('#inputbox').placeholder ="Enter A Value In Celcius";
                    document.querySelector('#outputbox1').placeholder ="Fahrenheit";
                    document.querySelector('#outputbox2').placeholder ="Kelvin";

                    document.querySelector('#btn').onclick=function()
                    {
                        if(document.querySelector('#inputbox').value==0)
                        {
                            document.querySelector('p').innerHTML="Please Enter A Temperature";
                        }
                        else
                        {
                            celcius();
                            document.querySelector('p').innerHTML="";
                        }
                    }

                break;

                case "far":

                    document.querySelector('#inputbox').placeholder ="Enter A Value In Fahrenheit";
                    document.querySelector('#outputbox1').placeholder ="Celcius";
                    document.querySelector('#outputbox2').placeholder ="Kelvin";

                    document.querySelector('#btn').onclick=function()
                    {
                        if(document.querySelector('#inputbox').value==0)
                        {
                            document.querySelector('p').innerHTML="Please Enter A Temperature";
                        }
                        else
                        {
                            fahrenheit();
                            document.querySelector('p').innerHTML="";
                        }
                    }

                break;

                case "kel":

                    document.querySelector('#inputbox').placeholder ="Enter A Value In Kelvin";
                    document.querySelector('#outputbox1').placeholder ="Celcius";
                    document.querySelector('#outputbox2').placeholder ="Fahrenheit";

                    document.querySelector('#btn').onclick=function()
                    {
                        if(document.querySelector('#inputbox').value==0)
                        {
                            document.querySelector('p').innerHTML="Please Enter A Temperature";
                        }
                        else
                        {
                            kelvin();
                            document.querySelector('p').innerHTML="";
                        }
                    }

                break;

            }
        }


        function celcius()
        {
            var num=document.querySelector('#inputbox').value;
            var f= (num*9/5)+32;
            var k= parseInt(num)+273;
            document.querySelector('#outputbox1').value=f;
            document.querySelector('#outputbox2').value=k;
        }
        function fahrenheit()
        {
            var num=document.querySelector('#inputbox').value;
            var c= parseInt( (num-32)*5/9 );
            var k= parseInt( (parseInt(num)-32)*5/9+273 );
            document.querySelector('#outputbox1').value=c;
            document.querySelector('#outputbox2').value=k;
        }
        function kelvin()
        {
            var num=document.querySelector('#inputbox').value;
            var c= (num-273);
            var f= parseInt( (parseInt(num)-273)*9/5+32 );
            document.querySelector('#outputbox1').value=c;
            document.querySelector('#outputbox2').value=f;
        }

        document.querySelector('#reset').onclick=function()
        {
            document.querySelector('#inputbox').value="";
            document.querySelector('#outputbox1').value="";
            document.querySelector('#outputbox2').value="";
        }