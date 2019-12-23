import React, {Component} from 'react';


class GameMap extends Component{

     constructor(props){
         super(props)
     }
     
     componentDidMount(){
        var loadScript = function(src) {
            var tag = document.createElement('script');
            tag.async = false;
            tag.src = src;
            document.getElementsByTagName('body')[0].appendChild(tag);
          }
          loadScript('engine.js')                      
     }

     render(){
         return (
            <div className="map">
            <article className="cols">
                <div className="cell" box="1" pos_id="0">
                    <img src="avatar.png" id="avatar" className="avatar"/>
                </div>
                <div className="cell" box="1" pos_id="1"></div>
                <div className="cell" box="0" pos_id="2"></div>
                <div className="cell" box="0" pos_id="3"></div>            
                <div className="cell" box="0" pos_id="4"></div>
                <div className="cell" box="0" pos_id="5"></div>
                <div className="cell" box="0" pos_id="6"></div>                
                <div className="cell" box="0" pos_id="7"></div>
                <div className="cell" box="0" pos_id="8"></div>
                <div className="cell" box="0" pos_id="9"></div>
                <div className="cell" box="0" pos_id="10"></div>
                <div className="cell" box="0" pos_id="11"></div>
            </article>
            <article className="cols">
                <div className="cell" box="0" pos_id="12"></div>
                <div className="cell" box="1" pos_id="13"></div>
                <div className="cell" box="0" pos_id="14"></div>
                <div className="cell" box="1" pos_id="15"></div>
                <div className="cell" box="1" pos_id="16"></div>
                <div className="cell" box="1" pos_id="17"></div>
                <div className="cell" box="0" pos_id="18"></div>            
                <div className="cell" box="1" pos_id="19"></div>
                <div className="cell" box="1" pos_id="20"></div>
                <div className="cell" box="1" pos_id="21"></div>
                <div className="cell" box="1" pos_id="22"></div>
                <div className="cell" box="0" pos_id="23"></div>            
            </article>        
            <article className="cols">
                <div className="cell" box="0" pos_id="24"></div>
                <div className="cell" box="1" pos_id="25"></div>
                <div className="cell" box="1" pos_id="26"></div>
                <div className="cell" box="1" pos_id="27"></div>
                <div className="cell" box="0" pos_id="28"></div>
                <div className="cell" box="1" pos_id="29"></div>
                <div className="cell" box="0" pos_id="30"></div>            
                <div className="cell" box="1" pos_id="31"></div>
                <div className="cell" box="0" pos_id="32"></div>
                <div className="cell" box="1" pos_id="33"></div>
                <div className="cell" box="0" pos_id="34"></div>
                <div className="cell" box="0" pos_id="35"></div>            
            </article>        
            <article className="cols">
                <div className="cell" box="0" pos_id="36"></div>
                <div className="cell" box="0" pos_id="37"></div>
                <div className="cell" box="0" pos_id="38"></div>
                <div className="cell" box="0" pos_id="39"></div>
                <div className="cell" box="0" pos_id="40"></div>
                <div className="cell" box="1" pos_id="41"></div>
                <div className="cell" box="1" pos_id="42"></div>            
                <div className="cell" box="1" pos_id="43"></div>
                <div className="cell" box="0" pos_id="44"></div>
                <div className="cell" box="1" pos_id="45"></div>
                <div className="cell" box="1" pos_id="46"></div>
                <div className="cell" box="0" pos_id="47"></div>            
            </article>                
            <article className="cols">
                <div className="cell" box="0" pos_id="48"></div>
                <div className="cell" box="1" pos_id="49"></div>
                <div className="cell" box="1" pos_id="50"></div>
                <div className="cell" box="1" pos_id="51"></div>
                <div className="cell" box="1" pos_id="52"></div>
                <div className="cell" box="1" pos_id="53"></div>
                <div className="cell" box="0" pos_id="54"></div>            
                <div className="cell" box="0" pos_id="55"></div>
                <div className="cell" box="0" pos_id="56"></div>
                <div className="cell" box="0" pos_id="57"></div>
                <div className="cell" box="1" pos_id="58"></div>
                <div className="cell" box="0" pos_id="59"></div>            
            </article>{/*<!-- ################################################################################# */}               
            <article className="cols">
                <div className="cell" box="0" pos_id="60"></div>
                <div className="cell" box="1" pos_id="61"></div>
                <div className="cell" box="0" pos_id="62"></div>
                <div className="cell" box="0" pos_id="63"></div>
                <div className="cell" box="0" pos_id="64"></div>
                <div className="cell" box="0" pos_id="65"></div>            
                <div className="cell" box="0" pos_id="66"></div>
                <div className="cell" box="1" pos_id="67"></div>
                <div className="cell" box="1" pos_id="68"></div>
                <div className="cell" box="1" pos_id="69"></div>
                <div className="cell" box="1" pos_id="70"></div>            
                <div className="cell" box="0" pos_id="71"></div>
            </article>
            <article className="cols">
                <div className="cell" box="0" pos_id="72"></div>
                <div className="cell" box="1" pos_id="73"></div>
                <div className="cell" box="1" pos_id="74"></div>
                <div className="cell" box="1" pos_id="75"></div>
                <div className="cell" box="1" pos_id="76"></div>
                <div className="cell" box="1" pos_id="77"></div>            
                <div className="cell" box="0" pos_id="78"></div>
                <div className="cell" box="1" pos_id="79"></div>
                <div className="cell" box="0" pos_id="80"></div>
                <div className="cell" box="0" pos_id="81"></div>
                <div className="cell" box="0" pos_id="82"></div>                        
                <div className="cell" box="0" pos_id="83"></div>
            </article>        
            <article className="cols">
                <div className="cell" box="0" pos_id="84"></div>
                <div className="cell" box="0" pos_id="85"></div>
                <div className="cell" box="0" pos_id="86"></div>
                <div className="cell" box="1" pos_id="87"></div>
                <div className="cell" box="0" pos_id="88"></div>
                <div className="cell" box="1" pos_id="89"></div>
                <div className="cell" box="0" pos_id="90"></div>            
                <div className="cell" box="1" pos_id="91"></div>
                <div className="cell" box="1" pos_id="92"></div>
                <div className="cell" box="1" pos_id="93"></div>
                <div className="cell" box="1" pos_id="94"></div>
                <div className="cell" box="0" pos_id="95"></div>                        
            </article>        
            <article className="cols">
                <div className="cell" box="0" pos_id="96"></div>
                <div className="cell" box="1" pos_id="97"></div>
                <div className="cell" box="1" pos_id="98"></div>
                <div className="cell" box="1" pos_id="99"></div>
                <div className="cell" box="0" pos_id="100"></div>
                <div className="cell" box="1" pos_id="101"></div>
                <div className="cell" box="0" pos_id="102"></div>            
                <div className="cell" box="0" pos_id="103"></div>
                <div className="cell" box="0" pos_id="104"></div>
                <div className="cell" box="0" pos_id="105"></div>
                <div className="cell" box="0" pos_id="106"></div>
                <div className="cell" box="0" pos_id="107"></div>                                    
            </article>                
            <article className="cols">
                <div className="cell" box="0" pos_id="108"></div>
                <div className="cell" box="0" pos_id="109"></div>
                <div className="cell" box="1" pos_id="110"></div>
                <div className="cell" box="0" pos_id="111"></div>
                <div className="cell" box="0" pos_id="112"></div>
                <div className="cell" box="1" pos_id="113"></div>
                <div className="cell" box="0" pos_id="114"></div>            
                <div className="cell" box="1" pos_id="115"></div>
                <div className="cell" box="1" pos_id="116"></div>
                <div className="cell" box="1" pos_id="117"></div>
                <div className="cell" box="0" pos_id="118"></div>
                <div className="cell" box="0" pos_id="119"></div>                        
            </article>{/*<!-- ################################################################################# */}               
            <article className="cols">
                <div className="cell" box="0" pos_id="120"></div>
                <div className="cell" box="1" pos_id="121"></div>
                <div className="cell" box="1" pos_id="122"></div>
                <div className="cell" box="1" pos_id="123"></div>
                <div className="cell" box="0" pos_id="124"></div>                        
                <div className="cell" box="1" pos_id="125"></div>
                <div className="cell" box="1" pos_id="126"></div>
                <div className="cell" box="1" pos_id="127"></div>            
                <div className="cell" box="0" pos_id="128"></div>
                <div className="cell" box="1" pos_id="129"></div>
                <div className="cell" box="1" pos_id="130"></div>
                <div className="cell" box="2" pos_id="131"></div>
            </article>
            <article className="cols">
                <div className="cell" box="0" pos_id="132"></div>
                <div className="cell" box="0" pos_id="133"></div>
                <div className="cell" box="0" pos_id="134"></div>
                <div className="cell" box="0" pos_id="135"></div>
                <div className="cell" box="0" pos_id="136"></div>
                <div className="cell" box="0" pos_id="137"></div>
                <div className="cell" box="0" pos_id="138"></div>            
                <div className="cell" box="0" pos_id="139"></div>
                <div className="cell" box="0" pos_id="140"></div>
                <div className="cell" box="0" pos_id="141"></div>
                <div className="cell" box="0" pos_id="142"></div>
                <div className="cell" box="0" pos_id="143"></div>                                    
            </article>{/*<!-- ################################################################################# */}               
        </div>
         )
     }
}

export default GameMap;