import React, { Component } from 'react';
import '../../App.css';
import Navbar from '../../components/Navbar';
import Item from '../../components/Item';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
          rolls: [
            {
                imageURL: "assets/products/original-cinnamon-roll.jpg",
                type: "Original Cinnamon Roll",
                basePrice: 2.49,
            },
            {
                imageURL: "assets/products/apple-cinnamon-roll.jpg",
                type: "Apple Cinnamon Roll",
                basePrice: 3.49,
            },
            {
                imageURL: "assets/products/raisin-cinnamon-roll.jpg",
                type: "Raisin Cinnamon Roll",
                basePrice: 2.99,
            },
            {
                imageURL: "assets/products/walnut-cinnamon-roll.jpg",
                type: "Walnut Cinnamon Roll",
                basePrice: 3.49,
            },
            {
                imageURL: "assets/products/double-chocolate-cinnamon-roll.jpg",
                type: "Double-Chocolate Cinnamon Roll",
                basePrice: 3.99,
            },
            {
                imageURL: "assets/products/strawberry-cinnamon-roll.jpg",
                type: "Strawberry Cinnamon Roll",
                basePrice: 3.99,
            }
          ],
          totalItems: 0,
          totalPrice: 0.00,
          curType: "",
          curGlazing: "",
          curPackSize: 1,
          curPrice: 0,
          isPopupVisible: false
        }
    }

    //Add to Cart button functionality
    addItem = (type, glazingLabel, packSize, price) => {
        this.setState(prevState => ({
            ...prevState,
            totalItems: parseFloat(this.state.totalItems) + parseFloat(packSize),
            totalPrice: (parseFloat(this.state.totalPrice) + parseFloat(price)).toFixed(2),
            curType: type,
            curGlazing: glazingLabel,
            curPackSize: packSize,
            curPrice: price,
            isPopupVisible: true
        }))
        this.removePopup()
    }

    //Removes add item popup after 3 seconds
    removePopup = () => {
        setTimeout(() => {
            this.setState(prevState => ({
                ...prevState,
                isPopupVisible: false
            }))
        }, 3000)
    }

    render() {
        return (
            <div>

                <Navbar 
                    totalItems={this.state.totalItems}
                    totalPrice={this.state.totalPrice}
                    curType={this.state.curType}
                    curGlazing={this.state.curGlazing}
                    curPackSize={this.state.curPackSize}
                    curPrice={this.state.curPrice}
                    isPopupVisible={this.state.isPopupVisible}
                    />

                {/* container for all items to be shown on store page  */}
                <div className="items-container">
                    {/* <!-- first row of items --> */}
                    <div className="item-row">
                        
                        <Item 
                            imageURL={this.state.rolls[0].imageURL}
                            type={this.state.rolls[0].type}
                            basePrice={this.state.rolls[0].basePrice}
                            addItem={this.addItem} 
                            />
                        
                        <Item
                            imageURL={this.state.rolls[1].imageURL}
                            type={this.state.rolls[1].type}
                            basePrice={this.state.rolls[1].basePrice}
                            addItem={this.addItem} 
                            />

                        <Item
                            imageURL={this.state.rolls[2].imageURL}
                            type={this.state.rolls[2].type}
                            basePrice={this.state.rolls[2].basePrice}
                            addItem={this.addItem} 
                            />
                            
                    </div>

                    {/* <!-- second row of items --> */}
                    <div className="item-row">

                        <Item
                            imageURL={this.state.rolls[3].imageURL}
                            type={this.state.rolls[3].type}
                            basePrice={this.state.rolls[3].basePrice}
                            addItem={this.addItem} 
                            />

                        <Item
                            imageURL={this.state.rolls[4].imageURL}
                            type={this.state.rolls[4].type}
                            basePrice={this.state.rolls[4].basePrice}
                            addItem={this.addItem} 
                            />

                        <Item
                            imageURL={this.state.rolls[5].imageURL}
                            type={this.state.rolls[5].type}
                            basePrice={this.state.rolls[5].basePrice}
                            addItem={this.addItem} 
                            />

                    </div>
                </div>
            </div>
        );
  }
}

export default Index