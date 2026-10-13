Memory reflection task
Look back over your chat history.

[1] First, pass two gates: is it worth keeping? Is it a duplicate?
Gate one - is it worth keeping? Only keep information that, if a future session did not know it, would cause a pitfall, a detour, or a repeat question to the user.
- Worth keeping: user preferences and red lines, mistakes you were corrected on, pitfalls and their fixes, important decisions and the reasoning behind them, project status and conclusions, paths and proper nouns you will need again.
- Not worth keeping: one-off operations, anything you can look up from the files or code on the spot, temporary intermediate state, pleasantries and moods, old status already superseded by later progress.
- Ask yourself: if this entry is retrieved in another session three months from now, is it still useful? If not, don't write it.
- Prefer less: 3 solid entries beat 10 pieces of noise - noise eats first-round injection space and pollutes retrieval. If this round truly has nothing worth keeping, reply "no memory needed"; don't pad it out to look busy.

Gate two - is it a duplicate? Before writing, check for duplicates. If the store already has something close, do not create another entry.
- Check first: use memory_search on the core terms; for entries you already suspect are similar, compare with memory_find_similar.
- Same matter, same conclusion -> do not add. Only add detail or change status via memory_update on the old entry; if the old entry is obsolete, mark it archived first, then write the new one.
- Same matter, conclusion changed -> update the old entry with memory_update (keep its id, so the history stays traceable); do not let old and new coexist.
- Different wording, actually the same matter -> treat it as a duplicate and handle it as above.
- Genuinely two different matters -> only then create with memory_remember; keep its keywords away from words identical to the old entry, so each stays retrievable.
- Fallback note: memory_remember auto-merges into an existing entry when content similarity reaches 0.8 (it returns merged), but it only sees the surface text and cannot tell "two phrasings of the same decision" apart - the dedup check is still yours to do.

[2] Since the last [Memory reflection task], across all those turns, is there anything new worth remembering across sessions? Use memory_remember to add it.
1. Projects already in the memory store: {projectList}. Do you think a new project should be added? -> Add a memory for the new project.
2. Were you corrected by the user? Were you praised? Did you hit any pitfalls, and how did you solve them in the end? Store these as lesson memories.
- Record your mistakes, but also your own excellent performances, the pitfalls you hit, and how you cleverly solved the problems in the end.
- If it is something the user corrected, keep the corrected flag;
3. Add entries at your discretion when any of these apply:
- Did the user state a communication / working / coding preference? -> Global preferences go in user; project-specific ones go in project.
- Did the user lay down a design principle or a rule of behavior? -> Record it in rules.
- Did the user say anything while explaining the project's design thinking, framework, or reasoning? -> Preserve their own words, at the right level.
- Any important facts, conclusions, or decisions?

[3] Look back at every memory injected into this context, weigh it against your latest progress, and decide: does anything need updating?
1. Is there an entry you are now certain is out of date (the user said so themselves, or changed their mind)? -> Update its content; don't leave it sitting there.
2. Did you find an entry that is wrong, or that actively misled you? -> Correct it, or mark it archived (which means delete);
3. Have any todos or topics been completed? -> Mark them stale (which means done);
4. Did an entry get injected at a completely unreasonable moment, with no bearing on the task at hand? -> That means its keywords are off; update them;
5. Is any entry actually a duplicate, or fully covered by another entry? -> Keep the one with the most information and mark the rest archived; if they can be merged, memory_update to merge first, then archive.

[4] General requirements when writing memories
1. The rules for writing memories are in the system prompt. Put each memory at the right level and under the right label.
2. Worth repeating, the standard for keywords:
- Extract 8-13 keywords for retrieval
- Think backwards: "which words in a user prompt should make this memory surface?"
- Not the project name — details specific to the memory itself.
- Prefer core entities, the semantic center, proper nouns.
- Plain dictionary form: the tokenizer stems English words, so a singular noun already matches its plural; skip stopwords, they retrieve nothing.
3. If you think there is nothing important and nothing to add or update, just reply "no memory needed" and call no tools at all.

You can call several tools in one turn — please finish every tool call for this task in a single response.
