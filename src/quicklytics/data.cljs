(ns quicklytics.data
  (:require 
    ["@aws-sdk/client-dynamodb" 
     :refer (DynamoDBClient ListTablesCommand PutItemCommand)]
    [quicklytics.core.click :as click]))

(defn dynamo-client! [] (new DynamoDBClient #js{:region "us-east-2"}))

(defn extract-tables [^js result] (.-TableNames result))

(defn list-tables! [^js client]
  (-> (. client send (new ListTablesCommand {}))
      (.then #(-> % extract-tables js/console.log))
      (.catch #(js/console.log %))))

(defn insert-click! [^js client]
  (-> (. client
         send
        (new PutItemCommand (click/generate "https://justinpeterson.me")))
      (.then #(js/console.log %))
      (.catch #(js/console.log %))))

(comment
  (require '[quicklytics.data :as d] :reload-all)
  (defonce client (d/dynamo-client!))
  (d/list-tables! client))
