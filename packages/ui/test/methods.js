import _ from 'lodash'

export const findComponentByChildren = (SearchComponent, children, wrapper) => {
    const Components = wrapper.find(SearchComponent)
    let FoundComponent = undefined;

    Components.map( (Component) => {
        if(_.isEqual(Component.props().children, children)){
            FoundComponent = Component;
        }
    });

    return(FoundComponent)
};
