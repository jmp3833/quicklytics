(ns quicklytics.core
  (:require [quicklytics.data :as db]))

(defn fetch! [e] 
  (.respondWith 
	e 
	(js/Response. 
	  "Hello Worker!" 
	  {:headers {:content-type "text/plain"}})))

(this-as this (.addEventListener this "fetch" fetch!))
