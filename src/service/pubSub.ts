class PubSub<T> {
    suscriptors = new Map<string,[(data:T)=>void]>();
    
    emit(channel:string, data:T){
        const channelSuscriptor = this.suscriptors.get(channel);
        if(channelSuscriptor){
            channelSuscriptor.forEach(f=>f(data))
        }
    }
    on(channel:string, handler:(data:T)=>void){
        
        let channelSuscriptor = this.suscriptors.get(channel);
        
        if(!channelSuscriptor){
            channelSuscriptor = [handler];
            this.suscriptors.set(channel, channelSuscriptor);
        }else{
            channelSuscriptor.push(handler);
        }

        return ()=>{
            const index = channelSuscriptor.indexOf(handler);
            if(index>-1){
                channelSuscriptor.splice(index, 1);
                if(!channelSuscriptor.length){
                    this.suscriptors.delete(channel);
                }
            }
        }
    }
}
/*
const pubsub = new PubSub<number>()
pubsub.emit('voiz',10)
pubsub.on('voz',v=>console.log(v))*/

/*
 carrito->sus
 list->pub
 no vamos a depender del dom para comunicar componentes

 la instancia del pubsub en la lista y en la carrito deben la misma
 https://vuejs.org/guide/components/provide-inject
*/