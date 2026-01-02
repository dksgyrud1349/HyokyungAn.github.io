import { ICommon } from '../common/ICommon';

export declare namespace ICertificate {
  /**
   * ### Sample Rendering
   *
   * ![image](https://user-images.githubusercontent.com/8033320/78058621-8c6d1f00-73c3-11ea-92ec-7f9f036dc985.png)
   *
   * @example https://github.com/uyu423/resume-nextjs/blob/master/payload/education.ts
   */
  export interface Payload extends ICommon.Payload {
    /** ### 자격증 리스트 */
    list: Item[];
  }

  export interface Item {
    /** ### 자격증 명 */
    title: string;

    /**
     * ### 자격증 취득 시점
     *
     * @format YYYY-MM
     * @example '2010-03'
     */
    startedAt: string;
  }
}
