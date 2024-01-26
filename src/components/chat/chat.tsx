// 'use client';

// import { useChat } from 'ai/react';
// import styles from "./Chat.module.sass"

// export const Chat = () => {
  //   const { messages, input, handleInputChange, handleSubmit } = useChat();
  
  //   return (
//     <main className={styles.Chat}>
//       <section>
//         {messages.map(m => (
  //           <div key={m.id}>
//             {m.role === 'user' ? 'User: ' : 'AI: '}
//             {m.content}
//           </div>
//         ))}
//       </section>
//       <form  onSubmit={handleSubmit}>
//         <input
//           value={input}
//           onChange={handleInputChange}
//           placeholder="Say something..."
//         />
//         <button
//           type="submit"
//         >
//           Send
//         </button>
//       </form>
//     </main>
//   );
// }

'use client';

import { useChat } from 'ai/react';
import styles from "./Chat.module.sass"

export default function Chat(props: {agent:string}) {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [
      {
        id:'1',
        role: 'system',
        content: props.agent
      }
    ],
  });

  return (
    <div className={styles.Chat}>
      {messages
      .filter(m => m.role !=='system')
      .map(m => (
        <div key={m.id}>
          {m.role === 'user' ? '👤: ' : '🤖: '}
          {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}