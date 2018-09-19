import React, { Component } from 'react';
import CreateItem from './CreateItem';
import ItemContainer from '../../containers/ItemContainer';

export default class CreateItemContainer extends Component {
  static navigationOptions = {
    title: 'Create Item',
  };
  locationlist = [
    {
      label: `Select a Location`,
      value: null,
    },
  ];
  categorylist = [
    {
      label: `Select a Category`,
      value: null,
    },
  ];
  render() {
    return (
      <ItemContainer>
        {({ createItem, subcategories, locations }) => {
          if (
            locations.data.allLocations &&
            subcategories.data.allSubCategories
          ) {
            subcategories.data.allSubCategories.map(subcategory =>
              this.categorylist.push({
                label: subcategory.title,
                value: subcategory.id,
              })
            );
            locations.data.allLocations.map(location =>
              this.locationlist.push({
                label: location.title,
                value: location.id,
              })
            );
          }
          return (
            <CreateItem
              createItem={createItem}
              locationList={this.locationlist}
              categoryList={this.categorylist}
              navigation={this.props.navigation}
            />
          );
        }}
      </ItemContainer>
    );
  }
}
