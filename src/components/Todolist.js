import React from 'react';
import {connect} from 'react-redux';

class Todolist extends React.Component {
  renderList() {
  return this.props.list.map((item) => {
  return (
    <div className="item">
        <h3>List Item</h3>
    <div style={{float: 'right'}}>
      <button className="ui button">
        Remove
      </button>
    </div>
      <div className="ui divider" style={{marginBottom: '10px'}}>
      </div>
    </div>
  )
});
 }
 render() {
   console.log(this.props.list)
   return <div>{this.renderList()}</div>
 }

};

const mapStateToProps = (state) => {
  console.log(state);
  return {list: state.list};
}

export default connect(mapStateToProps,)(Todolist);





// class SongList extends React.Component {
//
//   renderList() {
//     return this.props.songs.map((song) => {
//       return (
//         <div className="item" key={song.title}>
//           <div className="right floated content">
//             <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
//               Select
//             </button>
//           </div>
//             <div className="content">{song.title}</div>
//         </div>
//       )
//     });
//   }
//
//   render() {
//     // This.props === {songs: state.songs};
//     console.log(this.props);
//     return <div className="ui divided list">{this.renderList()}</div>
//   }
// }
