 document.getElementsByClassName("one")[0].style.display="block"

 var g=document.getElementById("c")
 var g1=document.getElementById("c1")
 var g2=document.getElementById("c2")
 var g3=document.getElementById("c3")
 var g4=document.getElementById("c4")
 var g5=document.getElementById("c5")
 var g6=document.getElementById("c6")
 var g7=document.getElementById("c7")
 var g8=document.getElementById("c8")
 var g9=document.getElementById("c9")
 var score=0
 function update(){

    if(document.getElementById("correct1").checked)
        {
        g.textContent="1.Right"
            g.style.backgroundColor="green"
        score++
         
        }
        else{
            g.textContent="1.Wrong"
            g.style.backgroundColor="red"
        }

        if(document.getElementById("correct2").checked)
            {
            g1.textContent="2.Right"
               
                g1.style.backgroundColor="green"
                score++
            
            }
            
            else{
                g1.textContent="2.Wrong"
                g1.style.backgroundColor="red"
            }

            if(document.getElementById("correct3").checked)
                {
                g2.textContent="3.Right"
                   
                    g2.style.backgroundColor="green"
                    score++
                
                }
                
                else{
                    g2.textContent="3.Wrong"
                    g2.style.backgroundColor="red"
                }




                if(document.getElementById("correct4").checked)
                    {
                    g3.textContent="4.Right"
                       
                        g3.style.backgroundColor="green"
                        score++
                    
                    }
                    
                    else{
                        g3.textContent="4.Wrong"
                        g3.style.backgroundColor="red"
                    }

                    if(document.getElementById("correct5").checked)
                        {
                        g4.textContent="5.Right"
                           
                            g4.style.backgroundColor="green"
                            score++
                        
                        }
                        
                        else{
                            g4.textContent="5.Wrong"
                            g4.style.backgroundColor="red"
                        }

                        if(document.getElementById("correct6").checked)
                            {
                            g5.textContent="6.Right"
                               
                                g5.style.backgroundColor="green"
                                score++
                            
                            }
                            
                            else{
                                g5.textContent="6.Wrong"
                                g5.style.backgroundColor="red"
                            }


                            if(document.getElementById("correct7").checked)
                                {
                                g6.textContent="7.Right"
                                   
                                    g6.style.backgroundColor="green"
                                    score++
                                
                                }
                                
                                else{
                                    g6.textContent="7.Wrong"
                                    g6.style.backgroundColor="red"
                                }       
                                
                                

                                if(document.getElementById("correct8").checked)
                                    {
                                    g7.textContent="8.Right"
                                       
                                        g7.style.backgroundColor="green"
                                        score++
                                    
                                    }
                                    
                                    else{
                                        g7.textContent="8.Wrong"
                                        g7.style.backgroundColor="red"
                                    }



                                    if(document.getElementById("correct9").checked)
                                        {
                                        g8.textContent="9.Right"
                                           
                                            g8.style.backgroundColor="green"
                                            score++
                                        
                                        }
                                        
                                        else{
                                            g8.textContent="9.Wrong"
                                            g8.style.backgroundColor="red"
                                        }
                                        if(document.getElementById("correct10").checked)
                                            {
                                            g9.textContent="10.Right"
                                               
                                                g9.style.backgroundColor="green"
                                         
                                                score++
                                                
                                            }
                                            
                                            else{
                                                g9.textContent="10.Wrong"
                                                g9.style.backgroundColor="red"
                                            }
                                            document.getElementById("sc").innerHTML="Score:10/0"+score
 }
 
 
function next(id){
   
    document.getElementsByClassName('one')[id-1].style.display="none";
    document.getElementsByClassName('one')[id].style.display="block"
    
}
    
      





        
        
























