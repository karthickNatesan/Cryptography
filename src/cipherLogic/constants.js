export const ENCDEF =
  "The process of transforming the plaintext (intelligible text) into ciphertext(unintelligible text) is called encryption. Rail FenceEncryption uses an integer for the number of levels of the zigzag.The encoded message is written in zig-zag (like a railfence/sawtooth) along a path with N levels/floors.";
export const ENCDEFEX =
  "Example: Encrypt HELLOCSEN4340STUDENTS! with N=3 is writing";
export const DECDEF =
  " The process of transforming the ciphertext(unintelligible text) into plaintext(intelligible text) is called decryption. RailFence decryption requires to know the number of levels N. Write the expected zigzag form and complete it by lines, before reading as zig zag";
export const DECDEFEX =
  "Example: Decrypt the message HON0DSELCE44SUET!LS3TN with N=3";
export const RAILFENCE =
  "The railfence cipher is an easy to apply transposition cipher that jumbles up the order of the letters of a message in a quick convenient way. It also has the security of a key to make it a little bit harder to break.";
export const RAILFENCE1 =
  "The simplest Rail Fence Cipher, where each letter is written in a zigzag pattern across the page.";

export const ENCRYPTDEF =
  "To encrypt a message using the Rail Fence Cipher, you have to write your message in zigzag lines across the page, and then read off each row. Firstly, you need to have a key, which for this cipher is the number of rows you are going to have. You then start writing the letters of the plaintext diagonally down to the right until you reach the number of rows specified by the key. You then bounce back up diagonally until you hit the first row again. This continues until the end of the plaintext.";

export const DESENCRYPT = `If we give the plaintext message "8787878787878787", and encrypt it with the DES key "0E329232EA6D0D73", we end up with the ciphertext "0000000000000000".`;

export const DESDECRYPT = `If the ciphertext is decrypted with the same secret DES key "0E329232EA6D0D73", the result is the original plaintext "8787878787878787".`;

export const OVERVIEW = `The Rail Fence cipher works by writing your message on alternate lines
across the page, and then reading off each line in turn. For example,
the plaintext "HELLOCSEN4340STUDENTS!" is written as shown below`;

export const OVERVIEW1 = `The ciphertext is then read off by writing the top row first, followed
by the bottom row, to get "HON0DSELCE44SUET!LS3TN ".`;

export const OVERVIEW2 = ` For the plaintext we used above, "HELLOCSEN4340STUDENTS!", with a key
of 3, we get the encryption process shown below.`;

export const OVERVIEW3 = `The Rail Fence Cipher with a key of 3. Notice the nulls added at the
end of the message to make it the right length.`;

export const OVERVIEW4 = `Note that at the end of the message we have inserted two "X"s. These
are called nulls, and act as placeholders. We do this to make the
message fit neatly in to the grid (so that there are the same number
of letters on the top row, as on the bottom row. Although not
necessary, it makes the decryption process a lot easier if the message
has this layout.`;

export const OVERVIEW5 = ` The ciphertext is read off row by row to get "HON0DSELCE44SUET!LS3TN
".`;

export const OVERVIEW6 = `The decryption process for the Rail Fence Cipher involves
reconstructing the diagonal grid used to encrypt the message. We start
writing the message, but leaving a dash in place of the spaces yet to
be occupied. Gradually, you can replace all the dashes with the
corresponding letters, and read off the plaintext from the table. We
start by making a grid with as many rows as the key is, and as many
columns as the length of the ciphertext. We then place the first
letter in the top left square, and dashes diagonally downwards where
the letters will be. When we get back to the top row, we place the
next letter in the ciphertext. Continue like this across the row, and
start the next row when you reach the end. For example, if you receive
the ciphertext "TEKOOHRACIRMNREATANFTETYTGHH", encrypted with a key of
4, you start by placing the "T" in the first square. You then dash the
diagonal down spaces until you get back to the top row, and place the
"E" here. Continuing to fill the top row you get the pattern below.`;

export const OVERVIEW7 = `The first row of the decryption process for the Rail Fence Cipher.
We have a table with 4 rows because the key is 4, and 28 columns as
the ciphertext has length 28. Continuing this row-by-row, we get the
successive stages shown below.`;

export const OVERVIEW8 = `The fourth and final stage in the decryption process. From this we
can now read the plaintext off following the diagonals to get "they
are attacking from the north".`;

export const OVERVIEW9 = `The Rail Fence Cipher is a very easy to apply transposition cipher.
However, it is not particularly secure, since there are a limited
number of usable keys, especially for short messages (for there to be
enough movement of letters, the length of the message needs to be at
lease twice the key, but preferably 3 times the key). You could
process these quite quickly by hand, and even more quickly with a
computer. The use of nulls can also have a detrimental effect on the
security of the cipher, as an interceptor can use them to identify
where the end of the line is, and so have a sensible guess at the key.
This can be averted by using a more common letter, such as "E", to
fill the null spaces, as it will still be clear to the recipient that
these are not part of the message as they will appear at the end of
the plaintext. The Rail Fence Cipher can also be utilised without the
use of nulls. One way to also make the encryption a little bit more
secure, is to keep the spaces as characters, and include them in the
encryption table. They are treated in exactly the same way as any
other letter. For example, using the plaintext "defend the east wall"
with a key of 3 again, but this time including spaces we get the table
below.`;

export const OVERVIEW10 = `The Rail Fence Cipher with spaces left in the message. Colour is used
to emphasise where spaces are, against the blank squares of the table.
So the ciphertext would read "DNHAWXEEDTEES ALF TL".`;
/////////////////////////////////////////////////////////////////////////////////////////////

/* DES constants */

export const DES1 = `Data encryption standard (DES) has been found vulnerable against very powerful attacks and therefore, the popularity of DES has been found slightly on decline.

DES is a block cipher, and encrypts data in blocks of size of 64 bit each, means 64 bits of plain text goes as the input to DES, which produces 64 bits of cipher text. The same algorithm and key are used for encryption and decryption, with minor differences. The key length is 56 bits. The basic idea is show in figure.`
export const DES2 = `We have mention that DES uses a 56 bit key. Actually, the initial key consists of 64 bits. However, before the DES process even starts, every 8th bit of the key is discarded to produce a 56 bit key. That is bit position 8, 16, 24, 32, 40, 48, 56 and 64 are discarded.`


export const DES3 = `Thus, the discarding of every 8th bit of the key produces a 56-bit key from the original 64-bit key.`
export const DES4 = `DES is based on the two fundamental attributes of cryptography: substitution (also called as confusion) and transposition (also called as diffusion). DES consists of 16 steps, each of which is called as a round. Each round performs the steps of substitution and transposition. Let us now discuss the broad-level steps in DES.`
export const DES5 = `1.In the first step, the 64 bit plain text block is handed over to an initial Permutation (IP) function.`
export const DES6= `2.The initial permutation performed on plain text.`
export const DES7 = `3.Next the initial permutation (IP) produces two halves of the permuted block; says Left Plain Text (LPT) and Right Plain Text (RPT).`
export const DES8 = `4.Now each LPT and RPT to go through 16 rounds of encryption process.`
export const DES9 = `5.In the end, LPT and RPT are rejoined and a Final Permutation (FP) is performed on the combined block`
export const DES10 = `6.The result of this process produces 64 bit cipher text.`


export const DES11 = `As we have noted, the Initial permutation (IP) happens only once and it happens before the first round. It suggests how the transposition in IP should proceed, as show in figure.`

export const DES12 = `For example, it says that the IP replaces the first bit of the original plain text block with the 58th bit of the original plain text, the second bit with the 50th bit of the original plain text block and so on.`

export const DES13 = `This is nothing but jugglery of bit positions of the original plain text block. the same rule applies for all the other bit positions which shows in the figure.`
export const DES14 = `As we have noted after IP done, the resulting 64-bit permuted text block is divided into two half blocks. Each half block consists of 32 bits, and each of the 16 rounds, in turn, consists of the broad level steps outlined in figure.`
export const DES15 = `We have noted initial 64-bit key is transformed into a 56-bit key by discarding every 8th bit of the initial key. Thus, for each a 56-bit key is available. From this 56-bit key, a different 48-bit Sub Key is generated during each round using a process called as key transformation. For this the 56 bit key is divided into two halves, each of 28 bits. These halves are circularly shifted left by one or two positions, depending on the round.`
export const DES16 = `For example, if the round number 1, 2, 9 or 16 the shift is done by only position for other rounds, the circular shift is done by two positions. The number of key bits shifted per round is show in figure.`

export const DES17 = `After an appropriate shift, 48 of the 56 bit are selected. for selecting 48 of the 56 bits the table show in figure given below. For instance, after the shift, bit number 14 moves on the first position, bit number 17 moves on the second position and so on. If we observe the table carefully, we will realize that it contains only 48 bit positions. Bit number 18 is discarded (we will not find it in the table), like 7 others, to reduce a 56-bit key to a 48-bit key. Since the key transformation process involves permutation as well as selection of a 48-bit sub set of the original 56-bit key it is called Compression Permutation.`
export const DES18 = `Because of this compression permutation technique, a different subset of key bits is used in each round. That’s make DES not easy to crack.`
export const DES19 = `Recall that after initial permutation, we had two 32-bit plain text areas called as Left Plain Text(LPT) and Right Plain Text(RPT). During the expansion permutation, the RPT is expanded from 32 bits to 48 bits. Bits are permuted as well hence called as expansion permutation. This happens as the 32 bit RPT is divided into 8 blocks, with each block consisting of 4 bits. Then, each 4 bit block of the previous step is then expanded to a corresponding 6 bit block, i.e., per 4 bit block, 2 more bits are added.`
export const DES20 = `This process results into expansion as well as permutation of the input bit while creating output. Key transformation process compresses the 56-bit key to 48 bits. Then the expansion permutation process expands the 32-bit RPT to 48-bits. Now the 48-bit key is XOR with 48-bit RPT and resulting output is given to the next step, which is the S-Box substitution.`
// export const DES6 = ``
// export const DES6 = ``
// export const DES6 = ``



