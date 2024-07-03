import React from "react";

class Li extends React.Component{
    render() {
        return(
            <>
                <li>
                    <div class="title">
                        What can the latest Java innovations do for your business?
                    </div>
                    <div class="text">
                        Join Oracle Java leaders Georges Saab and Donald Smith on a May 17 webinar to explore innovations in the world's leading application development platform.
                    </div>
                    <div class="thum">
                        <img src="./imgs/img01.png">
                    </div>
                    <div class="go_btn">
                        <a href="#none">Register now</a>
                    </div>
                </li>            
            </>
        )
    }
}

class Ul extends React.Component {
    render(){
        return(
            <>
                <ul>
                    <Li infos={{
                        txt01:'What can the latest Java innovations do for your business',
                        txt02:'Join Oracle Java leaders Georges Saab and Donald Smith on a May 17 webinar to explore innovations in the world'\s leading application development platfor',
                        txt01:'img01.png',
                        txt03:'Register now''
                    }} />
                    <Li infos={{
                        txt01:' Oracle Autonomous Data Warehouse breaks through boundaries',
                        txt02:'New innovations simplify data access and sharing across organizations and clouds at significantly reduced costs.',
                        txt01:'img02.png>',
                        txt03:Learn more'',
                    }}/>
                    <Li infos={{
                        txt01:' Oracle Autonomous Data Warehouse breaks through boundaries',
                        txt02:'New innovations simplify data access and sharing across organizations and clouds at significantly reduced costs.',
                        txt01:'img01.png>',
                        txt03:Learn more'',
                    }}/>
                </ul>
            </>
        );
    }
}

class LastNews React.Component {
    render () {
        return(
            <>
            <div class="last_news">


            </div>
            </>
        );
    }
}

export default LastNew;