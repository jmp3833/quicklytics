(ns quicklytics.main
  (:require [quicklytics.data :as db]))

(defn fetch! [e] 
  (.respondWith 
	e 
	(js/Response. 
	  "Hello Worker!" 
	  {:headers {:content-type "text/plain"}})))

(comment (this-as this (.addEventListener this "fetch" fetch!)))

(defn main! [] (println "hello world"))
