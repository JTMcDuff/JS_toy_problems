//Basic tree impleentation
let Tree = function(){
  this.children = [];
};

// extend prototype with methods

// start with add child
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

// Find common ancestor
Tree.prototype.getClosestCommonAncestor = function( tree1, tree2){
  let ancestor = this;
  
  //Handling edge case
  if ( tree1 === this || tree2 === this) {
    return ancestor;
  }
  // Get the paths.
  let path1 = this.getAncestorPath(tree1);
  let path2 = this.getAncestorPath(tree2);
  
  
  // if the first two are not the same, then they are not ancestors at all.
  if ( path1 === null || path2 === null || path1[0] != path2[0] ) {
    return null;
  }
  
  // iterate through path1, checking for matches in path2
  for ( let i = path1.length - 1; i > -1 ;  i --) {
    //if it matches, return it
    if ( path2.indexOf( path1[i] ) !== -1 ) {
      return path1[i];
    }
  }
}

//should return array of nodes from root to provided node
Tree.prototype.getAncestorPath = function( child ){
  // instantiate path for returning, along with current node for path
  let path = [this];
  //tracker variable to find the child
  let tracker = this;
  
  //recursive function to build path
  function findChild(tree,child) {
    //if we found the child, push it and return
    if (tree === child ) {
      path.push( child );
      return;
    }
    // else, we need to check the children
    // cache the length of children
    let len = tree.children.length;
    
    for ( let i = 0; i < len; i ++ ) {
      //if we found the child, push it and return
      if ( tree.children[i] === child) {
        path.push( child );
        return;
      }
      //if we found a descendant, push it and call the function on it
      if ( tree.children[i].isDescendant( child ) ) {
        path.push( tree.children[i] );
        findChild( tree.children[i] , child);
      }
    }
  }
  findChild(this, child);
  
  //case to ensure null is returned if path isn't found.
  if (path.length === 1) {
    return null;
  }
  return path;
}

//returns boolean value
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

//Removing a child
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};