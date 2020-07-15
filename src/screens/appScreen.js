import React, {Component} from 'react';
import {Image, FlatList} from 'react-native';
import {Container, Text, View, Content} from 'native-base';
import allColors from '../themes/allColors';
import CustomTheme from '../themes/customTheme';

export default class AppScreen extends Component{

    
    constructor(props) {
        super(props);
        this.state = {
            categories : [
                {
                    id: 1,
                    text: 'Pizza',
                    source:require('../assets/images/category_one.jpg') 
                },
                {
                    id: 2,
                    text: 'Burgers',
                    source:require('../assets/images/category_two.jpg') 
                },
                {
                    id: 3,
                    text: 'Steak',
                    source:require('../assets/images/category_three.jpg') 
                },
                {
                    id: 4,
                    text: 'Pasta',
                    source:require('../assets/images/category_four.jpg') 
                },
                
            ],

            popular: [
                {
                    id: 1,
                    text: 'Grilled Chicken',
                    source: require('../assets/images/popular_one.jpg'),
                    price: '$ 2.30',
                    priceBefore : '$ 2.60',
                    by: 'KFC'
                },
                {
                    id: 2,
                    text: 'Pon Fondant',
                    source: require('../assets/images/popular_two.jpg'),
                    price: '$ 3.30',
                    priceBefore : '$ 3.60',
                    by: "Mcdonald's"
                },
            ],

            
            trending: [
                {
                    id: 1,
                    text: "McDonald's",
                    source: require('../assets/images/trending_one.jpg'),
                    price: '$ 4.30',
                    priceBefore : '$ 5.60',
                    type: 'Mexcian Creamy Nachos'
                },
                {
                    id: 2,
                    text: 'Paradise Biryani',
                    source: require('../assets/images/trending_two.jpg'),
                    price: '$ 3.30',
                    priceBefore : '$ 3.60',
                    type: "Chicken Biryani"
                },
            ]
        }
    }  
    // componentDidMount() {
    //     db.ref('/').on('value', querySnapShot => {
    //       let data = querySnapShot.val() ? querySnapShot.val() : {};
    
    //     //   let todoItems = {...data};
    //       console.log(data);
    //     //   this.setState({
    //     //     todos: todoItems,
    //     //   });
    //     });
    //   }
 
render(){
    
    return(
        <Container>
            <Content>
                <View style={{flexDirection: 'row', margin: 14, justifyContent: 'space-between'}}>
                    <View style={CustomTheme.appScreenThemes().locationView}>
                        <Image
                         style={CustomTheme.appScreenThemes().locationImage}
                           resizeMode="contain"
                           source={require('../assets/images/location.png')}
                         />
                  
                    </View>

                    <View style={CustomTheme.appScreenThemes().textFieldView}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
                            <Text style={{marginLeft: 10, color: allColors.textGrey}}>
                                Search for food items
                            </Text>

                            <Image
                         style={CustomTheme.appScreenThemes().searchImage}
                           resizeMode="contain"
                           source={require('../assets/images/search.png')}
                         />
                        </View>
                    </View>
                </View>

                <Text style={CustomTheme.appScreenThemes().mcdonalds}>
                    Welcome to McDonald's
                </Text>

                <View style={CustomTheme.appScreenThemes().titleView}>
                    <Text style={CustomTheme.appScreenThemes().title}>Top Categories</Text>
                    <View style={{flexDirection: 'row', backgroundColor: allColors.white}}>
                    <Image
                         style={CustomTheme.appScreenThemes().filerIcon}
                           resizeMode="contain"
                           source={require('../assets/images/filter.png')}
                         />
                         <Text style={CustomTheme.appScreenThemes().filterText}>
                             Filter
                         </Text>
                    </View>
                </View>
                
                <FlatList
                    horizontal={true}
                    scrollEnabled={true}
                    data={this.state.categories}
                    renderItem={({item, index, separators}) => (
                        <View style={{backgroundColor: 'white'}}>
                            <View style={{height: 100, width: 100, margin: 14}}>
                            <Image
                                style={CustomTheme.appScreenThemes().firstFlatlistImage}
                                  resizeMode='cover'
                                  source={item.source}
                                />
                            </View>
                      
                                
                    <Text style={CustomTheme.appScreenThemes().firstFlatlistText}>{item.text}</Text>
                          
                        </View>

                    )}
                    />

<View style={CustomTheme.appScreenThemes().titleView}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', }}>
                        Popular Items
                        </Text>

                    <View style={CustomTheme.appScreenThemes().viewAll}>
        
                            <Text style={CustomTheme.appScreenThemes().viewAllText}>
                             View all
                         </Text>
                    </View>
                </View>
                
                <FlatList
                    horizontal={true}
                    scrollEnabled={true}
                    data={this.state.popular}
                    renderItem={({item, index, separators}) => (

             <View style={CustomTheme.appScreenThemes().secondflatListFirstView}>
                            <View style={{backgroundColor: 'white', flexDirection: 'row', margin: 5}}>
                            <View style={{height: 120, width: 100, margin: 7}}>
                            <Image
                                style={CustomTheme.appScreenThemes().secondflatListImage}
                                  resizeMode='cover'
                                  source={item.source}
                                />
                            </View>
                      
                                
                            <View style={{margin: 5}}>
                                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                                    {item.text}
                                </Text>

                                <Text style={{color: allColors.price}}>
                                    {"by " + item.by}
                                </Text>

                                <Text style={{color: allColors.price, marginTop: -10}}>______</Text>

                                <Text style={CustomTheme.appScreenThemes().priceBefore}>{item.priceBefore}</Text>
                    
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <Text style={CustomTheme.appScreenThemes().price}>{item.price}</Text>
                      <View style={CustomTheme.appScreenThemes().addButton}>
                        <Text style={CustomTheme.appScreenThemes().add}>Add</Text>
                      </View>
                    </View>
                
                            </View>
                          
                        </View>
             </View>

                    )}
                    />

                    
<View style={CustomTheme.appScreenThemes().titleView}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', }}>
                        Trending Deals
                        </Text>

                    <View style={CustomTheme.appScreenThemes().viewAll}>
        
                            <Text style={CustomTheme.appScreenThemes().viewAllText}>
                             View all
                         </Text>
                    </View>
                </View>
                
                <FlatList
                    horizontal={true}
                    scrollEnabled={true}
                    data={this.state.trending}
                    renderItem={({item, index, separators}) => (

             <View style={CustomTheme.appScreenThemes().thirdFlatlistFirstView}>
                            <View style={{backgroundColor: 'white', margin: 5}}>
                            <View style={{height: 120, width: 220, margin: 7}}>
                            <Image
                                style={CustomTheme.appScreenThemes().thirdFlatlistImage}
                                  resizeMode='cover'
                                  source={item.source}
                                />
                            </View>
                      
                                
                            <View style={{margin: 5}}>
                                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                                    {item.text}
                                </Text>

                                <Text style={{color: allColors.price}}>
                                    {item.type}
                                </Text>

          

                     
                    
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                    <Text style={CustomTheme.appScreenThemes().priceBefore}>{item.priceBefore}</Text>
                      <Text style={CustomTheme.appScreenThemes().price}>{item.price}</Text>
                      <View style={CustomTheme.appScreenThemes().addButton}>
                        <Text style={CustomTheme.appScreenThemes().add}>Add</Text>
                      </View>
                    </View>
                
                            </View>
                          
                        </View>
             </View>

                    )}
                    />
            </Content>
        </Container>
    )
}
}
