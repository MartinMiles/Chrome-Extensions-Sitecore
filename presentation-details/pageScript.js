;(function(){
    function onIconDblClick(event){
      event.preventDefault();
      event.stopPropagation();
      const icon   = event.currentTarget;
      const node   = icon.closest('.scContentTreeNode');
      const anchor = node && node.querySelector('a[id^="Tree_Node_"]');
      if (!anchor) return;

      // now scForm lives in the page context
      scForm.postEvent(anchor, event, 'item:setlayoutdetails');
    }

    function attachHandlers(){
      document
        .querySelectorAll('.scContentTreeNodeIcon')
        .forEach(icon=>{
          icon.removeEventListener('dblclick', onIconDblClick);
          icon.addEventListener('dblclick', onIconDblClick);
        });
    }

    attachHandlers();
    new MutationObserver(attachHandlers)
      .observe(document.body, { childList: true, subtree: true });
  })();
