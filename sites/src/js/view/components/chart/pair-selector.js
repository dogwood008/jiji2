import React              from "react"
import MUI                from "material-ui"
import Theme              from "../../theme"
import AbstractComponent  from "../widgets/abstract-component"

const keys = new Set([
  "availablePairs", "selectedPair"
]);

const DropDownMenu = MUI.DropDownMenu;
const emptyItems   = [{text:""}];

export default class PairSelector extends AbstractComponent {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      items: emptyItems
    };
  }

  componentWillMount() {
    this.registerPropertyChangeListener( this.pairSelector(), keys);
    this.updateState();
  }

  onPropertyChanged(k, e) {
    this.updateState();
  }

  updateState() {
    const items = this.convertPairsToMenuItems(
      this.pairSelector().availablePairs);
    const selectedIndex = this.getSelectedIndex(
      this.pairSelector().selectedPair, items);
    this.setState({
      items : items,
      selectedIndex:selectedIndex
    });
  }

  convertPairsToMenuItems(pairs) {
    if (pairs.length <= 0) return emptyItems;
    return pairs.map((item) => {
      return {text:item.name, value:item.name };
    });
  }

  render() {
    return (
      <DropDownMenu
        className="pair-selector"
        displayMember="text"
        valueMember="value"
        menuItems={this.state.items}
        selectedIndex={this.state.selectedIndex}
        style={
          Object.assign(
            {width:Theme.chart.pairSelector.width}, this.props.style)
        }
        labelStyle={
          Object.assign({
            padding: "0px",
            color: Theme.getPalette().textColorLight
          }, Theme.chart.selector, this.props.labelStyle)
        }
        iconStyle={Object.assign({right:"8px"}, this.props.iconStyle)}
        underlineStyle={{margin: "0px"}}
        autoWidth={false}
        zDepth={5}
        onChange={this.onChange.bind(this)}/>
    );
  }

  onChange(e, selectedIndex, menuItem) {
    this.pairSelector().selectedPair = this.state.items[selectedIndex].payload;
    this.setState({selectedIndex: selectedIndex});
  }

  getSelectedIndex(pairName, items) {
    const index = items.findIndex((item)=>item.text === pairName);
    return index === -1 ? 0 : index;
  }

  pairSelector() {
    return this.props.model.pairSelector;
  }
}
PairSelector.propTypes = {
  model: React.PropTypes.object.isRequired,
  style: React.PropTypes.object,
  labelStyle: React.PropTypes.object,
  iconStyle: React.PropTypes.object
};
PairSelector.defaultProps = {
  style: {},
  labelStyle: {},
  iconStyle: {}
};
