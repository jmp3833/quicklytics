(ns quicklytics.core)

(defn fetch! [e] 
  (.respondWith 
	e 
	(js/Response. 
	  "Hello Worker!" 
	  (clj->js {:headers {:content-type "text/plain"}}))))

(this-as this (.addEventListener this "fetch" fetch!))
