// pageScript.js
;(function(){
  // 1) icon double-click opens Layout Details
  function onIconDblClick(event){
    event.preventDefault();
    event.stopPropagation();
    const icon = event.currentTarget;
    const node = icon.closest('.scContentTreeNode');
    const anchor = node.querySelector('a[id^="Tree_Node_"]');
    if (!anchor) return;
    scForm.postEvent(anchor,event,'item:setlayoutdetails');
  }

  // 2) anchor double-click opens Experience Editor
  function onAnchorDblClick(event){
    event.preventDefault();
    event.stopPropagation();
    // 'this' will be the <a> element
    return scForm.postEvent(this,event,'webedit:openexperienceeditor');
  }

  // attach both handlers
  function attachHandlers(){
    // icon
    document.querySelectorAll('.scContentTreeNodeIcon')
      .forEach(icon=>{
        icon.removeEventListener('dblclick',onIconDblClick);
        icon.addEventListener('dblclick',onIconDblClick);
      });

    // anchor (label plus whitespace)
    document.querySelectorAll('.scContentTreeNodeNormal')
      .forEach(anchor=>{
        anchor.removeEventListener('dblclick',onAnchorDblClick);
        anchor.addEventListener('dblclick',onAnchorDblClick);
      });
  }

  // initial bind and re-bind on tree changes
  attachHandlers();
  new MutationObserver(attachHandlers)
    .observe(document.body,{childList:true,subtree:true});
})();
