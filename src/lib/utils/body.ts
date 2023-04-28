export function generateTopicBody(title: string, text: string, link: string) {
    return (
        `
        <table border="0" cellpadding="0" cellspacing="0" height="50" width="100%">
        <tbody>
        <tr>
            <td align="center" class="naglowek">
            <table border="0" width="560">
            <tbody>
            <tr>
                <td align="left" style="width: 500px; height: 23px; font-family: Arial; color: #5b5b5b; font-size: 18px; font-weight: 700;">
                ${title}
                </td>
            </tr>
            <tr>
                <td align="left" style="width: 559px;height: 2px; background-color: #3498db; font-size:0px; padding: 0px;"></td>
            </tr>
            </tbody>
            </table>
            </td>
        </tr>
        </tbody>
        </table>
    
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="558">
        <tbody>
        <tr align="left">
            <td align="center" height="50" style="width: 558px; height: 54px; font-family: Arial; color: #8f8f8f; font-size: 15px; font-weight: 400; line-height: 20px; text-align: left;">
            ${text}<a href="${link}" style="font-family: Arial; color: #8f8f8f; font-size: 15px; font-weight: 400; line-height: 20px; text-align: left; text-decoration: none;" target="_blank"> </a>
    
            <p align="right"><a href="${link}" style="font-family: Arial; color: #8f8f8f; font-size: 15px; font-weight: 400; line-height: 20px; text-align: left; text-decoration: none;" target="_blank">przeczytaj więcej... </a></p>
            <a href="${link}" style="font-family: Arial; color: #8f8f8f; font-size: 15px; font-weight: 400; line-height: 20px; text-align: left; text-decoration: none;" target="_blank"> </a></td>
        </tr>
        </tbody>
        </table>
        `
    )
}