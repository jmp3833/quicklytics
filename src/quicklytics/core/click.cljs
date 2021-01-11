(ns quicklytics.core.click)

(defn generate [url]
  (clj->js 
    {:Item {:url {:S url}} 
     :TableName "clicks"}))
