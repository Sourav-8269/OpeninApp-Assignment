import React from 'react'
import "./../../styles/bottomCards.css"
import BottomArrow from "./../../../public/BottomArrow.png";
import PieChart from "./../../../public/PieChart.png"
import RightArrow from "./../../../public/RightArrow.png"
import Image from 'next/image'

const BottomCards = () => {
  return (
    <div id="bottomCardDiv">
        <div id="topProducts">
            <div id="bottomCardHeading">
                <div id="bottomCardHeadingLeft">
                    <h3>Top Products</h3>
                </div>
                <div id="bottomCardHeadingRight">
                    <p>May - June 2021</p>
                    <Image src={BottomArrow} width={8} height={5} alt='Date'/>
                </div>
            </div>
            <div id="topProductsData">
                <div id="topProductsDataLeft">
                    <Image src={PieChart} width={134} height={134} alt='Pie'/>
                </div>
                <div id="topProductsDataRight">
                    <div id="product">
                        <div id="productName">
                            <div id="productColor"></div>
                            <h4>Basic Tees</h4>
                        </div>
                        <p id="productPercent">55%</p>
                    </div>
                    <div id="product">
                        <div id="productName">
                            <div id="productColor"></div>
                            <h4>Custom Short Pants</h4>
                        </div>
                        <p id="productPercent">31%</p>
                    </div>
                    <div id="product">
                        <div id="productName">
                            <div id="productColor"></div>
                            <h4>Super Hoodies</h4>
                        </div>
                        <p id="productPercent">14%</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="Schedule">
            <div id="bottomCardHeading">
                <div id="bottomCardHeadingLeft">
                    <h3>Today's schedule</h3>
                </div>
                <div id="bottomCardHeadingRight">
                    <p>See All</p>
                    <Image src={RightArrow} width={5} height={8} alt='Schedule'/>
                </div>
            </div>
            <div id="schedule">
                <div id="schedule1">
                    <h4 id="scheduleHeading">Meeting with suppliers from Kuta Bali</h4>
                    <p>14.00-15.00</p>
                    <p>at Sunset Road, Kuta, Bali</p>
                </div>
                <div id="schedule2">
                    <h4 id="scheduleHeading">Check operation at Giga Factory 1</h4>
                    <p>18.00-20.00</p>
                    <p>at Central Jakarta</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BottomCards