

/*
  Using the IntersectionObserver
  Observers are objects that spots something in real-time.
  And there are different observers, which spots different things, 
  like the MutationObserver, where you can look for changes in the DOM, 
  for example. And we need in this case the IntersectionObserver.
*/
const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver ,propbs) => {
      /*
        Looping through all entries, which are observed.
      */
      entries.forEach((entry) => {
        /*
          With this condition, we check whether the element is in the current viewport, 
          respectively if the entry intersects with the viewport.
          If true, then we add the enter class and call the unobserve function.
          Because we don’t have to observe it anymore.
        */
        if(entry.isIntersecting) {
          
              
            
          animatedScrollObserver.unobserve(entry.target);
        }
      });
    }
  );
  
  /*
    The object for our vue directive.
    Vue.js provides several hook functions you can use for a directive.
    We need only one of them, the bind function, 
    which is called only once when the directive is bound to the element. 
    This is where you can do some setup work, for example.
    In this case we add a new CSS class to the element and observe it.
  */
 
  export default {
    bind(el) {
        animatedScrollObserver.observe(el);
        el.style.opacity = 0;    

        let transitions = 'opacity ' + duration + 'ms ease-in-out ' + delay + 'ms';
        transitions += ', transform ' + duration + 'ms ease-in-out ' + delay + 'ms';
    
        el.style.transition = transitions;
    
        /*
          Force the repaint to make sure the animation is triggered correctly, 
          then you can fire the method getComputedStyle.
          This is not necessary, but sometimes the animation may not start depending on the case.
        */
        getComputedStyle(el);
        
        /*
          With setTimeout you make sure the browser has finished the painting 
          after setting new CSS properties.
        */
        setTimeout(() => {
          el.style.opacity = 1;
          el.style.transform = 'initial';
        });
       
      }
      
    }
  


        