

/*
  NDB Connection Properties

*/ 

var NdbDefaultConnectionProperties = {
  "implementation"    : "ndb",            // This must always be "ndb".
 
  "ndb_connectstring" : "localhost:1186", // MySQL Cluster Connect String
  "database"          : "test",           // MySQL Database name
  "mysql_user"        : "root",

  /* The next 3 properties control the behavior when opening a connection. */
  "ndb_connect_retries" : 4,         // if < 0, keep trying forever
  "ndb_connect_delay"   : 5,         // full seconds between connection retries
  "ndb_connect_verbose" : 0,         // enable extra console output

  "linger_on_close_msec": 500,       /* When a client closes a DBConnectionPool,
                                        the underlying connection is kept open 
                                        for this many milliseconds in case 
                                        another client tries to re-open it.
                                     */

  "use_ndb_async_api"   : false,     /* If true, some operations will be
                                        executed using asynchronous calls for
                                        improved concurrency. If false, the
                                        number of operations in transit will be
                                        limited to one per uv worker thread.
                                     */
  
  "ndb_session_pool_min" : 4,
  "ndb_session_pool_max" : 100,      /* Each NdbConnectionPool maintains a
                                        pool of DBSessions (and their underlying
                                        Ndb objects).  These parameters set 
                                        guidelines for the size of that pool.
                                     */

  "ndb_session_concurrency" : 4      /* The number of concurrent transactions 
                                        in an Ndb Session.  Only one 
                                        transaction at a time is visible to the
                                        user, but one may start before previous
                                        ones have finished executing.
                                     */
};

/* This file is valid JavaScript 
*/
module.exports = NdbDefaultConnectionProperties;
