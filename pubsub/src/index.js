class pubSub {
  constructor() {
    this.subscribers = {};
    //{'event1': [callback1, callback2], 'event2': [callback3]}
  }

  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(callback);
    return () => this.unsubscribe(event, callback);
  }

  unsubscribe(event, callback) {
    if (!this.subscribers[event]) return;
    this.subscribers[event] = this.subscribers[event].filter(
      (cb) => cb !== callback
    );
  }

  publish(event, data) {
    if (!this.subscribers[event]) return;
    this.subscribers[event].forEach((callback) => {
      callback(data);
    });
  }
}
/*
@param event ->unique event fired
@param data ->data to be passed when event is fired
*/

// @param event ->unique event fired
// @param callback ->function to be called when event is fired
// */

//one event can have multiple subscribers
//one subscriber can subscribe to multiple events

const pb = new pubSub();
const unsubscribe1 = pb.subscribe('event1', (callback) => {
  console.log('event1 received with callback:', callback);
});
const unsubscribe2 = pb.subscribe('event2', (callback) => {
  console.log('event2 received with callback:', callback);
});
const unsubscribe3 = pb.subscribe('event3', (callback) => {
  console.log('event3 received with callback:', callback);
});

pb.publish('event1', 'data for event1');
pb.publish('event2', 'data for event2');
unsubscribe3();
pb.publish('event3', 'data for event3');
