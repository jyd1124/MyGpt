import OpenAI from "openai";

 // for backward compatibility, you can still use `https://api.deepseek.com/v1` as `baseURL`.
    const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: 'sk-bdd8b8427ce249599947c3aad568d18e'
});

async function main() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "写一个 js 语言打印 hello world 的程序" }],
        model: "deepseek-coder",
    });

    console.log(completion.choices[0].message.content);
}

main();