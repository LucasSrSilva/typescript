const frutas: Set<String> = new Set<String>();

frutas.add("kiwi");
frutas.add("Caqui");
frutas.add("Manga");
frutas.add("Caqui");

console.table(frutas);

console.log(`\n A frunta Caqui existe? ${frutas.has("Caqui")}`);

frutas.delete("Caqui");

console.table(frutas)